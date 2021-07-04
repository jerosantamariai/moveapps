import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { Descriptions } from 'antd';

const User = props => {
    const { store, actions } = useContext(Context);
    const { users } = store;
    const userId = props.match.params.userId;
    return (

        <div className="user-cont">
            {
                !!store.users ?
                    store.users.map((user, i) => {
                        if (JSON.stringify(user.id) === JSON.stringify(userId)) {
                            return (
                                <>
                                    <Descriptions title="User Info" key={i}>
                                        <Descriptions.Item label="UserName">{user.name}</Descriptions.Item>
                                        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                                        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                                        <Descriptions.Item label="Remark">empty</Descriptions.Item>
                                        <Descriptions.Item label="Address">
                                            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                                        </Descriptions.Item>
                                    </Descriptions>
                                    <Link to="/">Back</Link>
                                </>
                            )
                        }
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