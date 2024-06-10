import { Anchor, Image, Text, Stack } from "@mantine/core";
import Link from "next/link";
import { LinkIcon } from "../LinkIcon";

export const CardImage = () => {
  return (
    <Anchor component={Link} href={"/#"}>
      <Stack>
        <div>
          <Image
            src={"/session-002.jpeg"}
            h={360}
            w="100%"
            radius="lg"
            alt=""
          />
        </div>
        <div>
          <Text fw={700} c="dark">
            河野デジタル担当大臣が2024年OECD閣僚理事会に出席しました
            <LinkIcon />
          </Text>
        </div>
      </Stack>
    </Anchor>
  );
};
