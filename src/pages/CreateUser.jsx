import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function CreateUser() {
    const { register, handleSubmit } = useForm();
    
    const createUser = async (values) => {
        const UserData = new FormData();
        UserData.append("name", values.name);
        UserData.append("email", values.email);
        UserData.append("age", values.age);
        UserData.append("image", values.image[0]);
        const Response = await axios.post('http://ums12.runasp.net/api/users', UserData);
        console.log(Response); 
         window.location.href = '/users';
    }

    return (
        <section className="create-user py-5">
            <form onSubmit={handleSubmit(createUser)} encType="multipart/form-data">
                <div className="form-floating mb-3">
                    <input {...register('name')} type="text" className="form-control" id="name" placeholder="" />
                    <label for="name">User Name</label>
                </div>
                
                <div className="form-floating mb-3">
                    <input {...register('email')} type="email" className="form-control" id="email" placeholder="" />
                    <label for="email">User Email</label>
                </div>

                <div className="form-floating mb-3">
                    <input {...register('age')} type="number" className="form-control" id="age" placeholder="" />
                    <label for="age">User Age</label>
                </div>

                <div className="form-floating mb-3">
                    <input {...register('image')} type="file" className="form-control" id="image" placeholder="" />
                    <label for="image">User Image</label>
                </div>

                <button type="submit" className="btn btn-outline-success">Create</button>
            </form>
        </section>
    );
}
