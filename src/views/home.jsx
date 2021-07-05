import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const Home = props => {
    const { store } = useContext(Context);
    return (
        <section>
            <h1>HOME</h1>
            <div className="row d-flex justify-content-center ml-5">
                {
                    !!store.users ?
                        store.users.map((user, i) => {
                            return (
                                <div className="site-card-border-less-wrapper">
                                    <Card title={user.name} extra={<Link to={"/" + user.name}>More</Link>} style={{ width: 300 }} key={i}>
                                        <p>{user.username}</p>
                                        <p>{user.email}</p>
                                        <p>{user.phone}</p>
                                    </Card>
                                </div>
                            )
                        })
                        : (
                            null
                        )
                }
            </div>

        </section>

    );

}

export default Home;