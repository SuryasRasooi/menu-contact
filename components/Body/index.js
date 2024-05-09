import { useState } from "react";
import {
    WrapperDiv,
    Section,
    Section2,
    Title,
    Text,
    List,
    Head,
} from "./index.styled";

export default function Body() {
    return (
        <WrapperDiv>
            <Section>
                <Title>About</Title>
                <Text>
                    Suryas Rasooi, is based on authentic adaption on Indian
                    food, with tasty health benefit.
                </Text>
            </Section>
            <Section>
                <Title>What we do</Title>
                <Text>
                    We offer catering to upto 100 people, on site cooking,
                    delivery and blah blah....
                </Text>
            </Section>
            <Section2>
                <List>
                    <Head>Menu - Light</Head>
                    <ul>
                        <li>Samosas</li>
                        <li>Chicken Kebab</li>
                        <li>Lamb Kebabs</li>
                        <li>Chips</li>
                        <li>Salad</li>
                    </ul>
                </List>
                <List>
                    <Head>Menu - Medium</Head>
                    <ul>
                        <li>Samosas</li>
                        <li>Chicken Kebab</li>
                        <li>Lamb Kebabs</li>
                        <li>Chips</li>
                        <li>Salad</li>
                    </ul>
                </List>
                <List>
                    <Head>Menu - Large</Head>
                    <ul>
                        <li>Samosas</li>
                        <li>Chicken Kebab</li>
                        <li>Lamb Kebabs</li>
                        <li>Chips</li>
                        <li>Salad</li>
                    </ul>
                </List>
            </Section2>
        </WrapperDiv>
    );
}
