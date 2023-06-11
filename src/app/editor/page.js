"use client"

import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import io from 'socket.io-client';

//const socket = io('http://localhost:3001');
const socket = io("ws://localhost:3001");

const Page = () => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        socket.on('code update', (code) => {
            setCode(code);
        });
        /*
        if(!name){
            setName(prompt('¿Cuál es tu nombre'));
            socket.emit('new-user', name);
        }
        socket.on("new-user", (name) => {
            document.getElementById('user-list').innerHTML += `<p>${name} connected.</p>`
        });
        */
        socket.on("user-disconnected", (name) => {
            document.getElementById('user-list').innerHTML += `<p>${name} left.</p>`
        });
    }, []);

    const runCode = () => {
        try {
          const result = eval(code);
          setOutput(result);
          document.getElementById('output').innerHTML = result;
        } catch (e) {
          setOutput(e.message);
        }
      }

    const handleCodeChange = (value) => {
        setCode(value);
        socket.emit('code update', value);
    };

    return (
        <div className='h-screen grid grid-cols-2 p-10'>
            <Editor
                onChange={(value) => handleCodeChange(value)}
                height="90vh"
                theme='vs-dark'
                defaultLanguage="javascript"
                value={code}
                defaultValue={code}
            />
            <div className='w-full h-full bg-slate-700'>
                <div id='user-list'>

                </div>
                <div className='mx-8 my-10 flex justify-center'>
                    <button onClick={runCode} className='w-3/12  bg-blue-600 text-white rounded-lg p-2'>Execute</button>
                </div>                
                <div className='output-container'>
                    <h2 className='text-white'>Output:</h2>
                    <div className='output' id="output">{output}</div>
                </div>
            </div>
        </div>
    )
}

export default Page;