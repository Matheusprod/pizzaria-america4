
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"


const ListarProduto = () => {

    const arrayProdutos = [

        {
            id: 1,
            nome: "Pizza de bosta",
            precoVenda: 67.42,
            descricao: "É uma bosta"


        },
        {
            id: 1,
            nome: "Pizza de bosta",
            precoVenda: 67.42,
            descricao: "É uma bosta"


        },
        {
            id: 1,
            nome: "Pizza de bosta",
            precoVenda: 67.42,
            descricao: "É uma bosta"


        },
    ]

    return (

        <div className="container">
            <MenuFuncionario />

            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Ações</th> {/* Nova coluna de Ações */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ fontSize: "13px" }}></td>
                            <td style={{ fontSize: "13px" }}>

                            </td>
                            <td style={{ fontSize: "13px" }}></td>
                            <td className="text-center fs-6" style={{ width: "100px" }}>
                                {/* Botão de Editar */}
                                <button
                                    className="btn btn-sm btn-primary me-2">
                                    <i className="fas fa-pencil-alt"></i>{" "}
                                    {/* Ícone de editar */}
                                </button>
                                {/* Botão de Excluir */}
                                <button
                                    className="btn btn-sm btn-danger">
                                    <i className="fas fa-trash-alt"></i>{" "}
                                    {/* Ícone de excluir */}
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            # Listar Produtos

        </div>
    )
}

export default ListarProduto

