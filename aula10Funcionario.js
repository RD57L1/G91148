class Funcionario {
    constructor(nome, cargo, salario) {
      this.nome = nome;
      this.cargo = cargo;
      this.salario = salario;
    }
  
    calcularSalarioAnual() {
      return this.salario * 12;
    }
  
    apresentarFuncionario() {
      console.log(`Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: R$ ${this.salario.toFixed(2)}`);
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
      super(nome, 'Gerente', salario);
      this.departamento = departamento;
    }
  }
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, salario, linguagemDeProgramacao) {
      super(nome, 'Desenvolvedor', salario);
      this.linguagemDeProgramacao = linguagemDeProgramacao;
    }
  }
  
  class AtendimentoAoCliente extends Funcionario {
    constructor(nome, salario, tempoDeEspera) {
      super(nome, 'Atendimento ao Cliente', salario);
      this.tempoDeEspera = tempoDeEspera;
    }
  }
  
  // Exemplo de uso
  const gerente1 = new Gerente('Ana', 8000, 'TI');
  gerente1.apresentarFuncionario();
  console.log(`Salário Anual: R$ ${gerente1.calcularSalarioAnual().toFixed(2)}`);
  
  const desenvolvedor1 = new Desenvolvedor('Carlos', 6000, 'JavaScript');
  desenvolvedor1.apresentarFuncionario();
  
  const atendimento1 = new AtendimentoAoCliente('Maria', 3500, 'Baixo');
  atendimento1.apresentarFuncionario();