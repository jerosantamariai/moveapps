import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const Home = props => {
    const { store, actions } = useContext(Context);
    const { users } = store;
    return (
        <section>
            <h1>HOME</h1>
            <div className="row d-flex justify-content-center ml-5">
                {
                    !!store.users ?
                        store.users.map((user, i) => {
                            return (
                                <Card title={user.name} extra={<Link to={"/users/" + user.id}>More</Link>} style={{ width: 300 }}>
                                    <p>{user.username}</p>
                                    <p>{user.email}</p>
                                    <p>{user.phone}</p>
                                </Card>
                            )
                        })
                        : (
                            <div class="text-center" id="undefined">
                                <div className="spinner-grow text-light" role="status">
                                </div>
                            </div>
                        )
                }
            </div>

        </section>
    );
}

export default Home;