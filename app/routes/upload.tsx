import React, { useState, type FormEvent } from 'react'
import Navbar from '~/components/navbar'

const upload = () => {
    const [isProcessing, setIsProcessing] = useState(true);
    const [statusText, setStatusText] = useState('');
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    }

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />
            <section className="main-section">
                <div className='page-heading'>
                    <h1>Smart feedback for your dream job</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src="/images/resume-scan.gif" className='w-full'/>
                        </>
                    ) : (
                        <h2>Drop your resume here for an ATS score and improvement tips</h2>
                    )}
                    {!isProcessing && (
                        <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4'>
                            <div className='form-div'>
                                <label htmlFor="company-name">Company Name</label>
                                <input type="text" id="company-name" placeholder="Company Name" name="company-name" />
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}

export default upload