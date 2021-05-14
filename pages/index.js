import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect} from "react";
import {useRouter} from "next/router";

function Redirect ({to}) {
  const router = useRouter();
  useEffect(() => {
    router.push(to);
  }, [to]);
  return null;
}

export default function Home() {
  return <Redirect to="/coming-soon" />
}
