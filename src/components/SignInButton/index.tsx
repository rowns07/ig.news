
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss';

import { signIn, signOut, useSession } from 'next-auth/react';

export function SignInButton() {
    const { data: session } = useSession();
    console.log('Session: ', session);
    console.log('Email: ', session?.user?.email);

    return session ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <FaGithub color='#04d361' />
            Diego Souza

            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('gitlab')}
        >
            <FaGithub color='#eba417' />
            Sign in Github
        </button>
    )
}