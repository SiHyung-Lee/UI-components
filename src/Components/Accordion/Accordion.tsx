import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const AccordionList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    border: 1px solid lightgray;
`;

const Item = styled.li`
    border-bottom: 1px solid #eee;
    overflow: hidden;
    &:last-child {
        border-bottom: none;
    }
    &.actived svg {
        transform: rotate(180deg);
    }
    &.actived div {
        max-height: 100vh;
        padding: 20px;
        border-top: 1px solid #eee;
    }
`;

const Toggle = styled.button`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: none;
    padding: 20px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
`;

const Content = styled.div`
    padding: 0 20px;
    transition: all ease 0.3s;
    max-height: 0;
`;

const items = [
    {
        title: "Accordion One",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
        title: "Accordion Two",
        desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    },
    {
        title: "Accordion Three",
        desc: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    },
];

const useAccordion = (initIndex: number, allAccordion: object[]) => {
    const [currentIndex, setCurrentIndex] = useState(initIndex);
    const changeItem = (index: number) => {
        setCurrentIndex(index);
    };
    return {
        currentIndex,
        changeItem,
    };
};

export default () => {
    const { currentIndex, changeItem } = useAccordion(0, items);
    return (
        <AccordionList>
            {items.map((item, index) => (
                <Item
                    key={index}
                    className={currentIndex === index ? "actived" : ""}>
                    <Toggle onClick={() => changeItem(index)}>
                        {item.title}
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Toggle>
                    <Content>{item.desc}</Content>
                </Item>
            ))}
        </AccordionList>
    );
};
