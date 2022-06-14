import React,{useState} from "react";

const Form = () =>{
   const [FullName, setFullName] = useState({
        fname: '',
        lname: '',
        ename: '',
        phone: '',
    });

    const inputName = (e)=>{
        console.log(e.target.value);
        console.log(e.target.name);

        const value = e.target.value;
        const name = e.target.name;
        setFullName((preValue)=>{
           return{
               ...preValue,
               [name]:value,
        };
        });
       
    };

    const submit = (e)=>{
        e.preventDefault();
        alert('Form submited');
    }
    return(
        <>
            <form onSubmit={submit}>
            <div>
            <h1>Hello {FullName.fname} {FullName.lname} {FullName.ename} {FullName.phone} </h1>
            <input type='text' name="fname" placeholder='Enter Your Name' onChange={inputName} value={FullName.fname}/><br/>
            <input type='text' name="lname" placeholder='Enter Your LastName' onChange={inputName} value={FullName.lname}/><br/>
            <input type='text' name="ename" placeholder='Enter Your Email' onChange={inputName} value={FullName.ename}/><br/>
            <input type='number' name="phone" placeholder='Enter Your phone' onChange={inputName} value={FullName.phone}/><br/>
            <button>Click here 👍</button>
            </div>
            </form>
        </>
    );
}
export default Form;
