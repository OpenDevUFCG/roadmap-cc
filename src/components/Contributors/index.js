import React, { Component, useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios'

const api = {
    baseUrl: "https://api.github.com"
}

export default function Contribuitors() {

    const [githubData, setGithubData] = useState([]);

    useEffect(() => {
        axios
            .get(api.baseUrl + "/repos/OpenDevUFCG/roadmap-cc/contributors")
            .then((res) => {
                setGithubData(res.data)
                console.warn(res.data)
            });
    }, []);

    return (
        <>
            {githubData.map((contributorData) => (
                <div className={styles.avatarWrapper}>
                    <a href={`https://github.com/${contributorData.login}`} target="_blank">
                    <img 
                        className={styles.avatar}
                        key={contributorData.login}
                        src={contributorData.avatar_url} 
                        alt={contributorData.login}
                    />
                    </a>
                </div>

            ))}
        </>
    );

};