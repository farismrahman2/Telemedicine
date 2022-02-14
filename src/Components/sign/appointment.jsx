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

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
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
                                {...register("firstName", {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^[A-Za-z]+$/i
                                })}
                            />
                            {errors?.firstName?.type === "required" && <p>This field is required</p>}
                            {errors?.firstName?.type === "maxLength" && (
                                <p>First name cannot exceed 20 characters</p>
                            )}
                            {errors?.firstName?.type === "pattern" && (
                                <p>Alphabetical characters only</p>
                            )}
                            <label>Last Name</label>
                            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                            {errors?.lastName?.type === "pattern" && (
                                <p>Alphabetical characters only</p>
                            )}
                            
                            <label>Date of Birth</label>
                            <Controller
                                control={control}
                                name="ReactDatepicker"
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <ReactDatePicker
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        selected={value}
                                    />
                                )}
                            />



                            <label>Email</label>
                            <input {...register("age", { required: true, pattern: /^\S+@\S+$/i })} />

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
