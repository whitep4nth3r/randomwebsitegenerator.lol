import Head from "next/head";
import { getRandomHeadline } from "@whitep4nth3r/get-random-headline";
import { getRandomTechBusinessName } from "@whitep4nth3r/get-random-tech-business-name";

import {
  AcademicCapIcon,
  AdjustmentsIcon,
  AnnotationIcon,
  ArrowCircleDownIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowCircleUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowNarrowDownIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  ArrowNarrowUpIcon,
  ArrowRightIcon,
  ArrowSmDownIcon,
  ArrowSmLeftIcon,
  ArrowSmRightIcon,
  ArrowSmUpIcon,
  ArrowUpIcon,
  AtSymbolIcon,
  BackspaceIcon,
  BadgeCheckIcon,
  BanIcon,
  BeakerIcon,
  BellIcon,
  BookOpenIcon,
  BookmarkAltIcon,
  BookmarkIcon,
  BriefcaseIcon,
  CakeIcon,
  CalculatorIcon,
  CalendarIcon,
  CameraIcon,
  CashIcon,
  ChartBarIcon,
  ChartPieIcon,
  ChartSquareBarIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  ChatIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChipIcon,
  ClipboardCheckIcon,
  ClipboardCopyIcon,
  ClipboardListIcon,
  ClockIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  CloudIcon,
  CodeIcon,
  CogIcon,
  CollectionIcon,
  ColorSwatchIcon,
  CreditCardIcon,
  CubeTransparentIcon,
  CubeIcon,
  CurrencyBangladeshiIcon,
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyPoundIcon,
  CurrencyRupeeIcon,
  CurrencyYenIcon,
  CursorClickIcon,
  DatabaseIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  DeviceTabletIcon,
  DocumentAddIcon,
  DocumentDownloadIcon,
  DocumentDuplicateIcon,
  DocumentRemoveIcon,
  DocumentReportIcon,
  DocumentSearchIcon,
  DocumentTextIcon,
  DocumentIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  DotsVerticalIcon,
  DownloadIcon,
  DuplicateIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  ExternalLinkIcon,
  EyeOffIcon,
  EyeIcon,
  FastForwardIcon,
  FilmIcon,
  FilterIcon,
  FingerPrintIcon,
  FireIcon,
  FlagIcon,
  GiftIcon,
  GlobeAltIcon,
  GlobeIcon,
  HandIcon,
  HashtagIcon,
  HeartIcon,
  HomeIcon,
  IdentificationIcon,
  InboxInIcon,
  InboxIcon,
  InformationCircleIcon,
  KeyIcon,
  LibraryIcon,
  LightBulbIcon,
  LightningBoltIcon,
  LinkIcon,
  LocationMarkerIcon,
  LockClosedIcon,
  LockOpenIcon,
  LoginIcon,
  LogoutIcon,
  MailOpenIcon,
  MailIcon,
  MapIcon,
  MoonIcon,
  MusicNoteIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  PauseIcon,
  PencilAltIcon,
  PencilIcon,
  PhoneIncomingIcon,
  PhoneMissedCallIcon,
  PhoneOutgoingIcon,
  PhoneIcon,
  PhotographIcon,
  PlayIcon,
  PresentationChartBarIcon,
  PresentationChartLineIcon,
  PrinterIcon,
  PuzzleIcon,
  QrcodeIcon,
  QuestionMarkCircleIcon,
  ReceiptRefundIcon,
  ReceiptTaxIcon,
  RefreshIcon,
  ReplyIcon,
  RewindIcon,
  RssIcon,
  SaveAsIcon,
  SaveIcon,
  ScaleIcon,
  ScissorsIcon,
  SearchCircleIcon,
  SearchIcon,
  SelectorIcon,
  ServerIcon,
  ShareIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SortAscendingIcon,
  SortDescendingIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  StarIcon,
  StatusOfflineIcon,
  StatusOnlineIcon,
  StopIcon,
  SunIcon,
  SupportIcon,
  SwitchHorizontalIcon,
  SwitchVerticalIcon,
  TableIcon,
  TagIcon,
  TemplateIcon,
  TerminalIcon,
  ThumbDownIcon,
  ThumbUpIcon,
  TicketIcon,
  TrashIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  TruckIcon,
  UploadIcon,
  VariableIcon,
  VideoCameraIcon,
  ViewBoardsIcon,
  ViewGridAddIcon,
  ViewGridIcon,
  ViewListIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  WifiIcon,
  XCircleIcon,
  XIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "@heroicons/react/solid";

const svgComponents = [
  <AcademicCapIcon />,
  <AdjustmentsIcon />,
  <AnnotationIcon />,
  <ArrowCircleDownIcon />,
  <ArrowCircleLeftIcon />,
  <ArrowCircleRightIcon />,
  <ArrowCircleUpIcon />,
  <ArrowDownIcon />,
  <ArrowLeftIcon />,
  <ArrowNarrowDownIcon />,
  <ArrowNarrowLeftIcon />,
  <ArrowNarrowRightIcon />,
  <ArrowNarrowUpIcon />,
  <ArrowRightIcon />,
  <ArrowSmDownIcon />,
  <ArrowSmLeftIcon />,
  <ArrowSmRightIcon />,
  <ArrowSmUpIcon />,
  <ArrowUpIcon />,
  <AtSymbolIcon />,
  <BackspaceIcon />,
  <BadgeCheckIcon />,
  <BanIcon />,
  <BeakerIcon />,
  <BellIcon />,
  <BookOpenIcon />,
  <BookmarkAltIcon />,
  <BookmarkIcon />,
  <BriefcaseIcon />,
  <CakeIcon />,
  <CalculatorIcon />,
  <CalendarIcon />,
  <CameraIcon />,
  <CashIcon />,
  <ChartBarIcon />,
  <ChartPieIcon />,
  <ChartSquareBarIcon />,
  <ChatAlt2Icon />,
  <ChatAltIcon />,
  <ChatIcon />,
  <CheckCircleIcon />,
  <CheckIcon />,
  <ChevronDoubleDownIcon />,
  <ChevronDoubleLeftIcon />,
  <ChevronDoubleRightIcon />,
  <ChevronDoubleUpIcon />,
  <ChevronDownIcon />,
  <ChevronLeftIcon />,
  <ChevronRightIcon />,
  <ChevronUpIcon />,
  <ChipIcon />,
  <ClipboardCheckIcon />,
  <ClipboardCopyIcon />,
  <ClipboardListIcon />,
  <ClockIcon />,
  <CloudDownloadIcon />,
  <CloudUploadIcon />,
  <CloudIcon />,
  <CodeIcon />,
  <CogIcon />,
  <CollectionIcon />,
  <ColorSwatchIcon />,
  <CreditCardIcon />,
  <CubeTransparentIcon />,
  <CubeIcon />,
  <CurrencyBangladeshiIcon />,
  <CurrencyDollarIcon />,
  <CurrencyEuroIcon />,
  <CurrencyPoundIcon />,
  <CurrencyRupeeIcon />,
  <CurrencyYenIcon />,
  <CursorClickIcon />,
  <DatabaseIcon />,
  <DesktopComputerIcon />,
  <DeviceMobileIcon />,
  <DeviceTabletIcon />,
  <DocumentAddIcon />,
  <DocumentDownloadIcon />,
  <DocumentDuplicateIcon />,
  <DocumentRemoveIcon />,
  <DocumentReportIcon />,
  <DocumentSearchIcon />,
  <DocumentTextIcon />,
  <DocumentIcon />,
  <DotsCircleHorizontalIcon />,
  <DotsHorizontalIcon />,
  <DotsVerticalIcon />,
  <DownloadIcon />,
  <DuplicateIcon />,
  <EmojiHappyIcon />,
  <EmojiSadIcon />,
  <ExclamationCircleIcon />,
  <ExclamationIcon />,
  <ExternalLinkIcon />,
  <EyeOffIcon />,
  <EyeIcon />,
  <FastForwardIcon />,
  <FilmIcon />,
  <FilterIcon />,
  <FingerPrintIcon />,
  <FireIcon />,
  <FlagIcon />,
  <GiftIcon />,
  <GlobeAltIcon />,
  <GlobeIcon />,
  <HandIcon />,
  <HashtagIcon />,
  <HeartIcon />,
  <HomeIcon />,
  <IdentificationIcon />,
  <InboxInIcon />,
  <InboxIcon />,
  <InformationCircleIcon />,
  <KeyIcon />,
  <LibraryIcon />,
  <LightBulbIcon />,
  <LightningBoltIcon />,
  <LinkIcon />,
  <LocationMarkerIcon />,
  <LockClosedIcon />,
  <LockOpenIcon />,
  <LoginIcon />,
  <LogoutIcon />,
  <MailOpenIcon />,
  <MailIcon />,
  <MapIcon />,
  <MoonIcon />,
  <MusicNoteIcon />,
  <NewspaperIcon />,
  <OfficeBuildingIcon />,
  <PaperAirplaneIcon />,
  <PaperClipIcon />,
  <PauseIcon />,
  <PencilAltIcon />,
  <PencilIcon />,
  <PhoneIncomingIcon />,
  <PhoneMissedCallIcon />,
  <PhoneOutgoingIcon />,
  <PhoneIcon />,
  <PhotographIcon />,
  <PlayIcon />,
  <PresentationChartBarIcon />,
  <PresentationChartLineIcon />,
  <PrinterIcon />,
  <PuzzleIcon />,
  <QrcodeIcon />,
  <QuestionMarkCircleIcon />,
  <ReceiptRefundIcon />,
  <ReceiptTaxIcon />,
  <RefreshIcon />,
  <ReplyIcon />,
  <RewindIcon />,
  <RssIcon />,
  <SaveAsIcon />,
  <SaveIcon />,
  <ScaleIcon />,
  <ScissorsIcon />,
  <SearchCircleIcon />,
  <SearchIcon />,
  <SelectorIcon />,
  <ServerIcon />,
  <ShareIcon />,
  <ShieldCheckIcon />,
  <ShieldExclamationIcon />,
  <ShoppingBagIcon />,
  <ShoppingCartIcon />,
  <SortAscendingIcon />,
  <SortDescendingIcon />,
  <SparklesIcon />,
  <SpeakerphoneIcon />,
  <StarIcon />,
  <StatusOfflineIcon />,
  <StatusOnlineIcon />,
  <StopIcon />,
  <SunIcon />,
  <SupportIcon />,
  <SwitchHorizontalIcon />,
  <SwitchVerticalIcon />,
  <TableIcon />,
  <TagIcon />,
  <TemplateIcon />,
  <TerminalIcon />,
  <ThumbDownIcon />,
  <ThumbUpIcon />,
  <TicketIcon />,
  <TrashIcon />,
  <TrendingDownIcon />,
  <TrendingUpIcon />,
  <TruckIcon />,
  <UploadIcon />,
  <VariableIcon />,
  <VideoCameraIcon />,
  <ViewBoardsIcon />,
  <ViewGridAddIcon />,
  <ViewGridIcon />,
  <ViewListIcon />,
  <VolumeOffIcon />,
  <VolumeUpIcon />,
  <WifiIcon />,
  <XCircleIcon />,
  <XIcon />,
  <ZoomInIcon />,
  <ZoomOutIcon />,
];

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function buildUniqueIntArray(length) {
  const randomInts = [];

  while (randomInts.length < length) {
    const newInt = getRandomInt(0, svgComponents.length);
    if (!randomInts.includes(newInt)) {
      randomInts.push(newInt);
    }
  }

  return randomInts;
}

export default function Home() {
  const headline = getRandomHeadline();
  const name = getRandomTechBusinessName();
  const svgComponentsIndexArray = buildUniqueIntArray(3);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{name}</h1>
        <p>{headline}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {/* THIS NO WORKS */}
          {svgComponents.filter((svg, index) => svgComponentsIndexArray.includes(index))}

          {/* THIS NO WORKS */}
          {svgComponentsIndexArray.map((int) => (
            <div key={int} data-key={int} style={{ height: "20px", width: "20px" }}>
              {svgComponents[int]}
            </div>
          ))}

          {/* THIS WORKS */}
          {svgComponents.map((comp, index) => (
            <div key={index} data-key={index} style={{ height: "20px", width: "20px" }}>
              {comp}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
