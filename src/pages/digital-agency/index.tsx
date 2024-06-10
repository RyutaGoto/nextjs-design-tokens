import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Flex, Grid, Image, NavLink } from "@mantine/core";
import { LinkIcon } from "@/components/LinkIcon";
import { CardImage } from "@/components/CardImage";

const DigitalAgency = () => {
  return (
    <>
      <header>
        <Image src="/logo.svg" radius="md" h={20} w="auto" />
        <nav>
          <NavLink
            component={Link}
            href={"/digital-agency/#"}
            label="ホーム"
            active
          />
          <NavLink
            component={Link}
            href={"/digital-agency/#"}
            label="一般の方"
          />
          <NavLink
            component={Link}
            href={"/digital-agency/#"}
            label="行政・事業者の方"
          />
        </nav>
      </header>
      <main>
        <section>
          <header>
            <h2>重要なお知らせ</h2>
          </header>
        </section>
        <ul>
          <li>
            <Link href={""}>
              <span>
                2024年12月2日から現行の健康保険証は発行されなくなるため、お早めにマイナ保険証をご利用ください
                <span></span>
              </span>
            </Link>
          </li>
        </ul>
        <section>
          <header>
            <h2>トピックス</h2>
          </header>
        </section>
        <Grid gutter="lg">
          <Grid.Col span={6}>
            <CardImage />
          </Grid.Col>
          <Grid.Col span={6}>
            <CardImage />
          </Grid.Col>
          <Grid.Col span={4}>
            <CardImage />
          </Grid.Col>
          <Grid.Col span={4}>
            <CardImage />
          </Grid.Col>
          <Grid.Col span={4}>
            <CardImage />
          </Grid.Col>
        </Grid>
        <section></section>
        <div></div>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <ul></ul>
        <section></section>
        <ul></ul>
      </main>
      <footer></footer>
    </>
  );
};

export default DigitalAgency;
