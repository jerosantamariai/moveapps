import React, { useContext } from 'react';
import { Context } from '../store/appContext';
// import { Link } from 'react-router-dom';
// import { Descriptions } from 'antd';

const User = props => {
    const { store, actions } = useContext(Context);
    const { users } = store;
    const infoId = props.match.params.infoId;
    return (

        <div className="user-cont">
            {
                !!store.users ?
                    store.users.map((user, i) => {
                        console.log(infoId);
                        console.log(user.id);
                        console.log(user.name);
                        console.log(user.email);
                        console.log(user.phone);
                        console.log(user.website);
                        if (JSON.stringify(user.id) === JSON.stringify(infoId)) {
                            return (
                                <div key={i}>
                                    <div>
                                        <h5>{user.name}</h5>
                                        <p>Episode Number: {user.username}</p>
                                        <p>Director: {user.mail}</p>
                                        <p>Producer: {user.phone}</p>
                                        <p>Release Date: {user.website}</p>
                                    </div>
                                </div>
                                //     <div key={i}>
                                //         <h1>Aqui hay algo</h1>
                                //         <Descriptions title="User Info">
                                //             <Descriptions.Item label="UserName">{user.name}</Descriptions.Item>
                                //             <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                                //             <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                                //             <Descriptions.Item label="Remark">empty</Descriptions.Item>
                                //             <Descriptions.Item label="Address">
                                //                 No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                                //             </Descriptions.Item>
                                //         </Descriptions>
                                //         <Link to="/">Back</Link>
                                //     </div>
                            )
                        }
                        return null
                    })
                    : (
                        null
                        // <div className="text-center" id="undefined">
                        //     <div className="spinner-grow text-light" role="status">
                        //     </div>
                        // </div>
                    )
            }
        </div>
    );
}

export default User;