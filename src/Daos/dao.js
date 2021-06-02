class Dao{

  constructor(db){
    this._db = db;
  }

  insereAluno(objAluno) {
    return new Promise((resolve, reject) => {

        var sqlInsert = "INSERT INTO Resultados (RA, Cod, Nota, Freq) VALUES ();"
        this._db.query(sqlInsert,
            function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('INSERÇÃO DA TABELA NAO RALIZADA');
                }
                resolve();
            }
        );
    });
  }

}