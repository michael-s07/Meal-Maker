const menu = {
    _courses: {
        appetizers: [],
        mains:[],
        desserts:[],
    },
    get appetizers(){
        return this._courses.appetizers;
    },
    get mains(){
        return this._courses.mains;
    },
    get desserts(){
        return this._courses.desserts;
    },
    set appetizers(appetizers){
        this._courses.appetizers = appetizers;
    },
    set mains(mains){
        this._courses.mains =  mains;
    },
    set desserts(desserts){
        this._courses.appetizers = desserts;
    }, 
    get courses(){
        return{
            appetizers: this.appetizers,
            mains:this.mains,
            desserts:this.desserts 
        };
        
    },
    addDishToCourse(courseName,dishName, dishPrice){
        const dish ={
            name:courseName,
            dish:dishName,
            price:dishPrice,
        };
        return this._courses[courseName].push(dish);

    },
    getRandomDishFromCourses(courseName){
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random()*dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourses('appetizers');
        const main = this.getRandomDishFromCourses('mains');
        const dessert = this.getRandomDishFromCourses('desserts');
        const totalPrice = appetizer.price + main.price +dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name},and the total price is ${totalPrice}`
    }
};


menu.addDishToCourse('appetizers', 'fries', 4.50) 

menu.addDishToCourse('mains', 'fufu', 30.00) 
 
menu.addDishToCourse('desserts', 'kelewele', 1.00) 
 

const meal =menu.generateRandomMeal()
console.log(meal)