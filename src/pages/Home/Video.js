import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faPause, faPlay, faVolumeMute, faVolumeUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import { PhoneIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react';
import ItemContainer from './ItemContainer';

const cx = classNames.bind(styles);

function VideoPlayer({ data }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const handelePlay = () => {
        setIsPlaying(!isPlaying);
    };
    const haneleMuted = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div className={cx('card-video')}>
            <ReactPlayer
                key={data.id}
                className={cx('video')}
                playing={isPlaying}
                muted={isMuted}
                url={data.file_url}
                width="100%"
                height="auto"
                controls={false}
                stopOnUnmount={true}
            />

            <div className={cx('describe')}>
                <Link to={routes.profile}>
                    <h3 className={cx('name')}>
                        {data.nickname}
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </h3>
                </Link>
                <span className={cx('text')}>{data.music}</span>
                <Link to="/" className={cx('link')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faMusic} />
                    <span className={cx('name-music')}>{data.music}</span>
                </Link>
                <div className={cx('controls')}>
                    <div className={cx('control-btn')} onClick={handelePlay}>
                        <FontAwesomeIcon className={cx('play')} icon={isPlaying ? faPause : faPlay} />
                    </div>
                    <div className={cx('seeBarContainer')}>
                        <div className={cx('seeBarContainerProgress')}></div>
                    </div>

                    <div>
                        <Tippy interactive content="Floating Player">
                            <div className={cx('iconPhone')}> {<PhoneIcon />}</div>
                        </Tippy>
                    </div>

                    <div className={cx('control-btn')} onClick={haneleMuted}>
                        <FontAwesomeIcon className={cx('volumeIcon')} icon={isMuted ? faVolumeMute : faVolumeUp} />
                    </div>
                </div>
            </div>
            <ItemContainer data={data} />
        </div>
    );
}

export default VideoPlayer;
