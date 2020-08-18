import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type FormValues = {
  name: string;
  email: string;
  avatar: string;
  whatsapp: string;
  bio: string;
};

function TeacherForm() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    api.post('classes', data).then(() => {
      toast.success("Cadastro realizado com sucesso!");
    }).catch(() => {
      toast.error("Erro no cadastro!");
    })  
  };

  return (
    <main>
    <ToastContainer />
    <form onSubmit={handleSubmit(onSubmit)}>
      nome
      <input name="name" type="text" ref={register} />email
      <input name="email" type="email" ref={register} />whatsapp
      <input name="whatsapp" type="text" ref={register} />avatar
      <input name="avatar" type="text" ref={register} />bio
      <input name="bio" type="text" ref={register} />

      <input type="submit" />
    </form>
    </main>
  );
}

export default TeacherForm;