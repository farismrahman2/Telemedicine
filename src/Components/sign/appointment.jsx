import React from "react";

import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { motion, AnimatePresence, animate } from 'framer-motion'
import './appointment.css';
import { useForm, Controller } from "react-hook-form";



const Modal = ({ showModal, setShowModal }) => {
    const defaultValues = { ReactDatepicker: new Date() }
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors }
    } = useForm(defaultValues);

    async function onSubmit(event) {
        event.PreventDefault()
        fetch('http://localhost:4000/app/signup',{
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // FirstName,
                // LastName,
                // email,
                // DoB
            }),
        })
        // const data = await response.json()
    }; // your form submit function which will invoke after successful validation


    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className="backdrop"
                    initial={{ x: '-99vw' }}
                    animate={{ x: '0' }}
                    transition={{ delay: 0, }}


                >
                    <motion.div className="modal"
                        initial={{ y: '-99vw' }}
                        animate={{ y: '0' }}
                        transition={{ delay: 0.5, type: 'spring', }}

                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>First Name</label>
                            <input
                                {...register("FirstName", {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^[A-Za-z]+$/i
                                })}
                            />
                            {errors?.FirstName?.type === "required" && <p>This field is required</p>}
                            {errors?.FirstName?.type === "maxLength" && (
                                <p>First name cannot exceed 20 characters</p>
                            )}
                            {errors?.FirstName?.type === "pattern" && (
                                <p>Alphabetical characters only</p>
                            )}
                            <label>Last Name</label>
                            <input {...register("LastName", { pattern: /^[A-Za-z]+$/i })} />
                            {errors?.LastName?.type === "pattern" && (
                                <p>Alphabetical characters only</p>
                            )}
                            
                            <label>Date of Birth</label>
                            <Controller
                                control={control}
                                name="DoB"
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <ReactDatePicker
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        selected={value}
                                    />
                                )}
                            />



                            <label>Email</label>
                            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                            <label>Phone</label>
                            <input {...register("age", { min: 18, max: 99 })} />

                            <input type="submit" />
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                        </form>

                    </motion.div>

                </motion.div>
            )}

        </AnimatePresence>


    )
}

export default Modal;
