import {useState, useEffect} from 'react';
import {NextPage, InferGetStaticPropsType} from 'next';
import {useRouter} from 'next/router';
import {AdminRedirectError} from '@sitebud/bridge-lib';

const AdminPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({owner, repo}) => {
    const router = useRouter();
    const [isError, setError] = useState<boolean>(false);

    useEffect(() => {
        if (owner && repo) {
            const rootUrl = `${window.location.protocol}//${window.location.host}`;
            const targetUrl = `https://sitebud-cms.web.app/?owner=${encodeURIComponent(owner)}&repo=${encodeURIComponent(repo)}&referrer=${encodeURIComponent(rootUrl)}`;
            router.replace(targetUrl);
        } else {
            setError(true);
        }
    }, []);

    if (!isError) {
        return null;
    }

    return (
        <AdminRedirectError url="#" />
    );
};

export async function getStaticProps() {
    const owner = process.env.OWNER || null;
    const repo = process.env.REPO || null;

    return {
        props: {
            owner,
            repo,
        },
    };
}

export default AdminPage;
