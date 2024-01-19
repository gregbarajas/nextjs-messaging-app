'use client';
import React from 'react';
import axios from "axios";
import { signIn, useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => { 
    const router = useRouter();


    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
          setVariant('REGISTER');
        } else {
          setVariant('LOGIN');
        }
      }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
          errors,
        }
      } = useForm<FieldValues>({
        defaultValues: {
          name: '',
          email: '',
          password: ''
        }
      });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true)

      if (variant === 'REGISTER') {

      }
      if (variant === 'LOGIN') {

      }

    const socialAction = (action: string) => {
        setIsLoading(true);
    }
  }
      
    
    

    return (
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div 
        className="
        bg-white
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
        "
      >
            <form
              className='space-y-6'
              onSubmit={handleSubmit(onSubmit)}
            >

            </form>
        </div>
        </div>
    )
 };


 export default AuthForm;