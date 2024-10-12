import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';

//Images
import Logo from '@/assets/dh-logo.png';

//Icons
import IconHome from '../Icons/IconHome';
import IconExams from '../Icons/IconExams';
import IconLessons from '../Icons/IconLessons';
import IconQuestionMark from '../Icons/IconQuestionMark';
import IconGuidance from '../Icons/IconGuidance';
import IconStatistics from '../Icons/IconStatistics';
import IconCalculation from '../Icons/IconCalculation';
import IconSolutions from '../Icons/IconSolutions';

//styls
import classes from './Navbar.module.scss';
import IconCozucuApp from '../Icons/IconCozucuApp';
import IconSimdiAnladimApp from '../Icons/IconSimdiAnladimApp';
import IconKocumYanimdaApp from '../Icons/IconKocumYanimdaApp';


interface NavbarLinkProps {
  icon: any;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const linksUpper = [
  { icon: IconHome, label: 'Home', link: '/' },
  { icon: IconLessons, label: 'Dersler', link: '/' },
  { icon: IconQuestionMark, label: 'Soru Bankası', link: '/' },
  { icon: IconExams, label: 'Deneme Sınavları', link: '/' },
  { icon: IconGuidance, label: 'Rehberlik', link: '/' },
  { icon: IconStatistics, label: 'İstatistik', link: '/' },
  { icon: IconCalculation, label: 'Ölçe ve Değerlendirme', link: '/' },
];

const linksApps = [
  { icon: IconCozucuApp, label: 'Çözücü App', link: '/' },
  { icon: IconSimdiAnladimApp, label: 'Simdi Anladım', link: '/' },
  { icon: IconKocumYanimdaApp, label: 'Kocum Yanimda', link: '/' },
];

export function Navbar() {
  const [active, setActive] = useState(2);

  const links = linksUpper.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  const apps = linksApps.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <img src={Logo} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" align='center' gap={20}>
          {links}
          {apps}
        </Stack>
      </div>

      <Stack justify="center" align='center' gap={0}>
        <IconSolutions />
      </Stack>
    </nav>
  );
}