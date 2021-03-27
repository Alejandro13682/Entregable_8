class Archivo{
    constructor(title, price, thumbnail){
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail
    }    
    static async guardar(arr){       
        try {
            let string = JSON.stringify(arr)
            let obj = JSON.parse(string) 
            let id = 1
            obj.map(item => item.id = id ++)                           
            let listado = listaProductos.push(obj)     
        } catch (e) {
            console.log(e)
        }   
    }
}

const productos = [
    new Archivo('Calculadora', 350, 'link'),     
    new Archivo('Escuadra', 350, 'link'),
    new Archivo('Carpeta', 350, 'link'),
]

Archivo.guardar(productos)

module.exports.Archivo = Archivo;