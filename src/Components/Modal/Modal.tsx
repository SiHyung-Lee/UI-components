import React from "react";
import styled from "styled-components";

const Opener = styled.button`
    display: inline-block;
    border: 1px solid #000;
    background: #fff;
    font-size: 16px;
    padding: 5px 20px;
    box-sizing: border-box;
    margin-right: 10px;
`;
const Outer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
`;
const Popup = styled.div`
    position: relative;
    width: 400px;
    border: 1px solid lightgray;
    background: #fff;
`;
const Header = styled.div`
    padding: 20px;
    font-size: 24px;
    font-weight: 600;
`;
const Body = styled.div`
    padding: 20px;
`;
const Closer = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
`;

const modals = [
    {
        title: `Modal One`,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s
    with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum.`,
    },
    {
        title: `Modal Two`,
        content: `Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over 2000 years old. Richard McClintock, a Latin professor
    at Hampden-Sydney College in Virginia, looked up one of the more
    obscure Latin words, consectetur, from a Lorem Ipsum passage, and
    going through the cites of the word in classical literature,
    discovered the undoubtable source. Lorem Ipsum comes from sections
    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
    of Good and Evil) by Cicero, written in 45 BC. This book is a
    treatise on the theory of ethics, very popular during the
    Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
    amet..", comes from a line in section 1.10.32.`,
    },
];
const handleOpenModal = (target: any) => {
    const targetModal = document.querySelector(target);

    targetModal.parentNode.style.display = "flex";
};

const handleCloseModal = (e: any) => {
    const targetModalOuter = e.target.closest(".modal-outer");

    targetModalOuter.style.display = "none";
};

export default () => {
    return (
        <>
            {modals.map((modal, idx) => (
                <span key={idx}>
                    <Opener
                        type='button'
                        onClick={() => handleOpenModal(`#modal${idx}`)}>
                        Open {modal.title}
                    </Opener>
                    <Outer className='modal-outer'>
                        <Popup id={`modal${idx}`}>
                            <Header>{modal.title}</Header>
                            <Body>{modal.content}</Body>
                            <Closer onClick={handleCloseModal}>Close</Closer>
                        </Popup>
                    </Outer>
                </span>
            ))}
        </>
    );
};
