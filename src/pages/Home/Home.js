import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import VideoPlayer from './Video';
import styles from './Home.module.scss';
import ItemContainer from './ItemContainer';
import * as UserServices from '~/Services/videosServices';

const cx = classNames.bind(styles);
function Home() {
    const [videoUser, setVideoUser] = useState([]);
    useEffect(() => {
        UserServices.fetchVideos()
            .then((data) => {
                setVideoUser(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx('wrapper')}>
            {videoUser.map((account) => (
                <VideoPlayer key={account.id} data={account}>
                    <ItemContainer data={account} />
                </VideoPlayer>
            ))}
        </div>
    );
}

export default Home;
