import { useRef, useState } from 'react';

export default function Form() {
  const emailInputRef = useRef(null); 
  const [email, setEmail] = useState(''); 

  const handleSubmit = (event) => { 
    event.preventDefault(); 
    console.log('Email sent:', email); 
  };

  return (
    <div className='p-8 mx-auto'>
      <div className='px-4 max-w-sm py-5 shadow sm:rounded-lg sm:p-6'>
        <h3 className='text-base font-semibold leading-6 text-gray-900'>
          Focus Input
        </h3>
        <form className='mt-5 sm:flex sm:items-center' onSubmit={handleSubmit}>
          <div className='w-full sm:max-w-xs'>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              ref={emailInputRef}
              className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${emailInputRef.current === document.activeElement ? 'ring-gray-600' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              placeholder='you@example.com'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button
            type='submit'
            className='mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto'
            onClick={() => emailInputRef.current.focus()}
          >
            Focus
          </button>
        </form>
      </div>
    </div>
  );
}