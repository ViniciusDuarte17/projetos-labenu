// ---------------------- Exercício 3 -----------------

const adicionarTarefas = () => {
    const tarefaz = []
    tarefaz.push(process.argv[2])
    console.log("tarefa adicionada com sucesso")
    console.log(tarefaz)
 }

 adicionarTarefas();