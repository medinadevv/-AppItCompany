import React, {useState} from 'react';
import './Admin.scss'
import axios from "axios";

const Admin = () => {

    const [values, setValues] = useState({
        image: '',
        name: '',
        profession: '',
    })

    function handleInputValue(e) {

        console.log(e.target.name)

        if (e.target.name === 'image') {
            let file = e.target.files[0]
            changeFileReader(file)

            // if (file.length !== 0) {
            //     setValues({...values, [e.target.name]: ''})
            // }
        } else {
            setValues({...values, [e.target.name]: e.target.value})
        }
    }

    async function changeFileReader(file){
        await axios.post('http://3.91.193.191/api/v1/files', file)
    }

    async function addToPerson(){
        await axios.post('')
    }

    return (
        <div id="admin">
            <div className="container">
                <div className="admin">
                    <div className="admin--title">
                        <input onChange={handleInputValue} value={values.image} name='image' type="file" placeholder="Cүрөтү"/>
                        <input onChange={handleInputValue} value={values.name} name='name' type="text" placeholder="Аты-жөнү"/>
                        <input onChange={handleInputValue} value={values.profession} name='profession' type="text" placeholder="Кесиби"/>
                        <button>Жүктөө</button>
                    </div>

                    {/*<div style={{background:img === null ? '': `url(${img}) no-repeat center/cover `}} className="admin--nav"></div>*/}

                </div>
            </div>
        </div>
    );
};

export default Admin;