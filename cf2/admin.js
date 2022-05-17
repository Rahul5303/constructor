function Produces(name,category,price,image,gender,sold){
    this.name=name;
    this.category=category;
    this.price=price;
    this.image=image;
    this.gender=gender;
    this.sold=sold;
}

let arr=JSON.parse(localStorage.getItem("Products")) || [];

function Products(e){
    e.preventDefault();
    let form=document.getElementById("add");
    let name=form.name.value;
    let category=form.category.value;
    let price=form.price.value;
    let image=form.image.src;
    let gender=form.gender.value;
    let sold=form.sold.value;
    // let imgurl=form.image.src;

    // console.log(name,category,price);
    let p1=new Produces(name,category,price,image,gender,sold)
    arr.push(p1);
    console.log("arr:",arr);

    localStorage.setItem("Products",JSON.stringify(arr));



}
