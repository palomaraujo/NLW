import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/palomaraujo.png" alt="Paloma Araujo"/>
            <div>
                <strong>Paloma Araujo</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}