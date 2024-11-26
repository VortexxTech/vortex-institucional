window.addEventListener("load", async () => {
    div_empresa.style.display = "flex";
    await listarDadosEmpresa();
})

async function listarDadosEmpresa() {
    const url = "/empresa";
    const divEmpresa = document.querySelector("#empresa_list");
    div_funcionarios.style.display = "none";
    div_usuarios.style.display = "none";
    div_empresa.style.display = "flex";

    
    async function getDadosEmpresa() {
        const res = await fetch(`${url}/listar`);
        const data = await res.json();
        return data;
    }

    const listaDadosEmpresa = await getDadosEmpresa();
    let dadosEmpresaFormatados = "";
    
    listaDadosEmpresa.map((item) => {
        dadosEmpresaFormatados += `
        <div class="user_item" id=${item.idEmpresa}>
        <span class="user_name">${item.nome}</span>
        <div class="user_actions">
        <button class="edit_btn">
        <i class="fas fa-pencil-alt"></i> Editar
        </button>
        <button class="delete_btn">
        <i class="fas fa-trash-alt"></i> Excluir
        </button>
        </div>
        </div>
        `
    });
    
    divEmpresa.innerHTML = dadosEmpresaFormatados;
    
    const btnEdit = document.querySelector(".edit_btn");
    const btnDelete = document.querySelector(".delete_btn");
    const btnCloseModal = document.querySelector("#close_modal");
    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector(".modal");

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
        const nomeEmpresa = button.parentElement.parentElement.firstElementChild.textContent;
    
        const idEmpresa = button.parentElement.parentElement.getAttribute("id");
    
        if (type === "edit") {
            const editModal = `
                <h2>Editar Empresa:</h2>
                <div>
                    <label for="name">
                    Nome da Empresa:
                    </label>
                    <input type="text" id="name">
                </div>
                <button class="btn-confirm edit_user">Editar</button>
            `;
    
            contentModal.innerHTML = editModal;
    
            const inputName = document.querySelector("#name");
            inputName.value = nomeEmpresa;
    
            const btnConfirm = document.querySelector(".btn-confirm");
            btnConfirm.addEventListener("click", (e) => verifyButton(e.currentTarget, idEmpresa));
    
        } else {
            const deleteModal = `
                <h2>Deletar empresa:</h2>
                <div>Deseja deletar a empresa ${nomeEmpresa}?</div>
                <button class="btn-confirm delete-user">Excluir</button>
            `;
    
            contentModal.innerHTML = deleteModal;
    
            const btnConfirm = document.querySelector(".btn-confirm");
            btnConfirm.addEventListener("click", (e) => verifyButton(e.currentTarget, idEmpresa));
        }
    }

    function verifyButton(button, id) {
        const typeButton = button.classList[1];
    
        if (typeButton == "edit_user") {
            editEmpresa(id);
        } else {
            deleteEmpresa(id);
        }
    }
    
    async function editEmpresa(id) {
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
    
        if (data) {
            await getEmpresa();
            return;
        }
    }
    
    async function deleteEmpresa(id) {
        const res = await fetch(`${url}/deletar/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await res.json();
    
        console.log(data);
    }
}

async function listarFuncionarios() {
    const url = "/funcionario";
    const divFuncionarios = document.querySelector("#func_list");
    div_empresa.style.display = "none";
    div_usuarios.style.display = "none";
    div_funcionarios.style.display = "flex";

    
    async function getFuncionarios() {
        const res = await fetch(`${url}/listar`);
        const data = await res.json();
        return data;
    }

    const listaFuncionarios = await getFuncionarios();
    let listaFuncionariosFormatados = "";

    listaFuncionarios.map((item) => {
        listaFuncionariosFormatados += `
        <div class="user_item" id=${item.idFuncionario}>
        <span class="user_name">${item.nome}</span>
        <div class="user_actions">
        <button class="edit_btn">
        <i class="fas fa-pencil-alt"></i> Editar
        </button>
        <button class="delete_btn">
        <i class="fas fa-trash-alt"></i> Excluir
        </button>
        </div>
        </div>
        `
    });

    divFuncionarios.innerHTML = listaFuncionariosFormatados;
    
    const btnEdit = document.querySelectorAll(".edit_btn");
    const btnDelete = document.querySelectorAll(".delete_btn");
    const btnCloseModal = document.querySelector("#close_modal");
    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector(".modal");

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

    btnEdit[1].addEventListener("click", (e) => {
        editModal("edit", e.currentTarget);
        showModal();
    });
    
    btnDelete[1].addEventListener("click", (e) => {
        editModal("delete", e.currentTarget);
        showModal();
    });
    
    btnCloseModal.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    
    function editModal(type, button) {
        const contentModal = modal.firstElementChild.lastElementChild;
        const nomeFuncionario = button.parentElement.parentElement.firstElementChild.textContent;
    
        const idFuncionario = button.parentElement.parentElement.getAttribute("id");
    
        if (type === "edit") {
            const editModal = `
                <h2>Editar funcionario:</h2>
                <div>
                    <label for="name">
                    Nome do funcionario:
                    </label>
                    <input type="text" id="name">
                </div>
                <button class="btn-confirm edit_user">Editar</button>
            `;
    
            contentModal.innerHTML = editModal;
    
            const inputName = document.querySelector("#name");
            inputName.value = nomeFuncionario;
    
            const btnConfirm = document.querySelector(".btn-confirm");
            btnConfirm.addEventListener("click", (e) => verifyButton(e.currentTarget, idFuncionario));
    
        } else {
            const deleteModal = `
                <h2>Deletar funcionario:</h2>
                <div>Deseja deletar o funcionario ${nomeFuncionario}?</div>
                <button class="btn-confirm delete-user">Excluir</button>
            `;
    
            contentModal.innerHTML = deleteModal;
    
            const btnConfirm = document.querySelector(".btn-confirm");
            btnConfirm.addEventListener("click", (e) => verifyButton(e.currentTarget, idFuncionario));
        }
    }

    function verifyButton(button, id) {
        const typeButton = button.classList[1];
    
        if (typeButton == "edit_user") {
            editFuncionario(id);
        } else {
            deleteFuncionario(id);
        }
    }
    
    async function editFuncionario(id) {
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
    
        if (data) {
            await getFuncionarios();
            return;
        }
    }
    
    async function deleteFuncionario(id) {
        const res = await fetch(`${url}/deletar/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await res.json();
    
        console.log(data);
    }
}

async function listarUsuarios() {
    const url = "/usuarios";
    const divUsuarios = document.querySelector("#user_list");
    div_funcionarios.style.display = "none";
    div_empresa.style.display = "none";
    div_usuarios.style.display = "flex";

    
    async function getUsuarios() {
        const res = await fetch(`${url}/listar`);
        const data = await res.json();
        return data;
    }
    
    const listaUsuarios = await getUsuarios();
    let listaUsuariosFormatados = "";
    
    listaUsuarios.map((item) => {
        listaUsuariosFormatados += `
        <div class="user_item" id=${item.idUsuario}>
        <span class="user_name">${item.nome}</span>
        <div class="user_actions">
        <button class="edit_btn">
        <i class="fas fa-pencil-alt"></i> Editar
        </button>
        <button class="delete_btn">
        <i class="fas fa-trash-alt"></i> Excluir
        </button>
        </div>
        </div>
        `
    });

    divUsuarios.innerHTML = listaUsuariosFormatados;
    
    const btnEdit = document.querySelectorAll(".edit_btn");
    console.log(btnEdit)
    const btnDelete = document.querySelectorAll(".delete_btn");
    const btnCloseModal = document.querySelector("#close_modal");
    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector(".modal");

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

    btnEdit[2].addEventListener("click", (e) => {
        editModal("edit", e.currentTarget);
        showModal();
    });
    
    btnDelete[2].addEventListener("click", (e) => {
        editModal("delete", e.currentTarget);
        showModal();
    });
    
    btnCloseModal.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    
    function editModal(type, button) {
        const contentModal = modal.firstElementChild.lastElementChild;
        const nomeUsuario = button.parentElement.parentElement.firstElementChild.textContent;
    
        const idUsuario = button.parentElement.parentElement.getAttribute("id");
    
        if (type === "edit") {
            const editModal = `
                <h2>Editar usuario:</h2>
                <div>
                    <label for="name">
                    Nome do usuario:
                    </label>
                    <input type="text" id="name">
                </div>
                <button class="btn-confirm edit_user">Editar</button>
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

    function verifyButton(button, id) {
        const typeButton = button.classList[1];
    
        if (typeButton == "edit_user") {
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
    
        if (data) {
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
}