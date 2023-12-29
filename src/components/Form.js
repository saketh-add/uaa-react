import React from "react"

export default function Form() {

    const [formData, setFormData] = React.useState({
        username: "",
        password: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        });
    }

    return (
        <div className='bluebox'>
            <div className='whitebox'>
                <p>Please enter your username and password and click login</p>
                <div className='form--div'>
                    <form className='form'>
                        <div className='input-row'>
                            <label htmlFor='text'>Username</label>
                            <input
                                name='username'
                                id='username'
                                type='username'
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='input-row'>
                            <label htmlFor='password'>Password</label>
                            <input
                                name='password'
                                type='password'
                                id='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button>LOGIN</button>
                    </form>
                </div>
                <p>Please enter your username and password and click login</p>
                <div className='footer--info'>
                    <p>
                        Existing iFast Clients: If you don't have username or password please contact you Client Relationship manager.
                        For more information on International Financial Data Services, please visit
                        <a style={{ display: 'block' }} href='https://www.ifdsgroup.com'>www.ifdsgroup.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}