import React from 'react';

//Libraries
import { Button, Group, Modal, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

//assets
import closeIcon from './../../../../assets/close-test.png';

//styles
import classes from './../right-side.module.scss';
import { IconInfoCircleFilled } from '@tabler/icons-react';

const AnswerHeader: React.FC = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className={classes.answerHeaderWrapper}>
            <Switch
                defaultChecked
                color="teal"
                labelPosition="left"
                label="Cevapları Göster"
                classNames={{ root: classes.answerHeaderSwitch, label: classes.answerHeaderSwitchLabel, input: classes.answerHeaderSwitchInput, track: classes.answerHeaderSwitchTrack }}       
            />
            <Button className={classes.answerHeaderClose} onClick={open}>
                <img src={closeIcon} />
                Testi Bitir
            </Button>
            <Modal.Root opened={opened} onClose={close}>
                <Modal.Overlay />
                <Modal.Content>
                <Modal.Header>
                    <Modal.CloseButton />
                </Modal.Header>
                <Modal.Body>
                    <div className={classes.answerHeaderModal}>
                        <IconInfoCircleFilled  width={42} height={42} />
                        <h3>Ayrılmak istediğine emin misin?</h3>
                        <p>Testi yarıda bırakıyorsun. İstediğin zaman kaldığın sorudan devam edebilirsin.</p>
                    </div>
                    <Group justify='center' align='center' className={classes.answerHeaderModalFooter}>
                        <Button onClick={close} color="gray" className={classes.close}>Vazgeç</Button>
                        <Button onClick={close} color="red" className={classes.confirm}>Testi Bitir</Button>
                    </Group>
                </Modal.Body>
                </Modal.Content>
            </Modal.Root>
        </div>
    );
};

export default AnswerHeader;