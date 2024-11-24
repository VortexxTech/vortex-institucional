window.addEventListener("load", async () => {
    const url = "/usuarios";
    const divUsuarios = document.querySelector(".user_list");
    
    function listarUsuarios(listaUsuarios) {
        let listaUsuariosFormatados = "";

        listaUsuarios.map((item) => {
            listaUsuariosFormatados += `
            <div class="user-item" id=${item.idUsuario}>
            <span class="user-name">${item.nome}</span>
            <div class="user-actions">
            <button class="edit-btn">
            <i class="fas fa-pencil-alt"></i> Editar
            </button>
            <button class="delete-btn">
            <i class="fas fa-trash-alt"></i> Excluir
            </button>
            </div>
            </div>
            `
        });
        
        divUsuarios.innerHTML = listaUsuariosFormatados;
    }
    
    async function getUsuarios() {
        const res = await fetch(`${url}/listar`);
        const data = await res.json();
        listarUsuarios(data);
    }
    await getUsuarios();

    const btnEdit = document.querySelector(".edit-btn");
    const btnDelete = document.querySelector(".delete-btn");
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const btnCloseModal = document.querySelector(".close-modal");
    
    btnEdit.addEventListener("click", (e) => {
        editModal("edit", e.currentTarget);
        showModal();
    });
    
    btnDelete.addEventListener("click", (e) => {
        editModal("delete", e.currentTarget);
        showModal();
    });

    btnCloseModal.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    
    function editModal(type, button) {
        const contentModal = modal.firstElementChild.lastElementChild;
        const nomeUsuario = button.parentElement.parentElement.firstElementChild.textContent;

        const idUsuario = button.parentElement.parentElement.getAttribute("id");

        if(type === "edit") {
            const editModal = `
                <h2>Editar usuario:</h2>
                <div>
                    <label for="name">
                    Nome do usuario:
                    </label>
                    <input type="text" id="name">
                </div>
                <button class="btn-confirm edit-user">Editar</button>
            `;
            
            contentModal.innerHTML = editModal;
            
            const inputName = document.querySelector("#name");
            inputName.value = nomeUsuario;

            const btnConfirm = document.querySelector(".btn-confirm");
            btnConfirm.addEventListener("click", (e) => verifyButton(e.currentTarget, idUsuario));

        } else {
            const deleteModal = `
                <h2>Deletar usuario:</h2>
                <div>Deseja deletar o usuario ${nomeUsuario}?</div>
                <button class="btn-confirm delete-user">Excluir</button>
            `;

            contentModal.innerHTML = deleteModal;

            const btnConfirm = document.querySelector(".btn-confirm");
            btnConfirm.addEventListener("click", (e) => verifyButton(e.currentTarget, idUsuario));
        }
    }

    function showModal() {
        modal.classList.remove("close");
        modal.classList.add("open");

        overlay.classList.remove("close");
        overlay.classList.add("open");
    }

    function closeModal() {
        modal.classList.remove("open");
        modal.classList.add("close");

        overlay.classList.remove("open");
        overlay.classList.add("close");
    }

    function verifyButton(button, id) {
        const typeButton = button.classList[1];

        if(typeButton == "edit-user") {
            editUser(id);
        } else {
            deleteUser(id);
        }
    }

    async function editUser(id) {
        const inputName = document.querySelector("#name");

        const res = await fetch(`${url}/atualizar/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nomeServer: inputName.value
            })
        });
        
        const data = await res.json();

        if(data) {
            await getUsuarios();
            return;
        }

    }

    async function deleteUser(id) {
        const res = await fetch(`${url}/deletar/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await res.json();

        console.log(data);
    }
})
