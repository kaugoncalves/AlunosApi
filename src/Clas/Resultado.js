class Resultado {
    
    constructor(ra, cod, nota, freq){
        this.ra = ra;
        this.cod = cod;
        this.nota = nota;
        this.freq = freq;

    }

    get ra(){
        return this.ra
    }

    get cod(){
        return this.cod
    }

    get nota(){
        return this.nota
    }

    get freq(){
        return this.freq
    }

    set ra(ra){
        this.ra = ra
    }

    set cod(cod){
        this.cod = cod
    }

    set nota(nota){
        this.nota = nota
    }

    set freq(freq){
        this.freq = freq
    }

    toString() {
        let ret = "Seu ra: " + (this.ra) + "seu codigo: " + (this.cod) + "sua nota: " (this.nota) + "sua frequencia nas disciplinas: " + (this.freq); 
    }

    

}
