import React from 'react'

import { Icon } from './Icons'
import { LegacyReactElement } from '../../types/legacyReactElement'

type StorybookArgs = {
  size: 3 | 4 | 5 | 6 | 7 | 8 | 9
}

export default {
  title: 'Components/Icons/Individual',
  parameters: {
    happo: false, // Don't take screenshots of individual icon stories
    docs: {
      description: {
        component: `
###USWDS 3.0 Icon component

Source: https://designsystem.digital.gov/components/icon/
`,
      },
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'number',
        min: 3,
        max: 9,
        step: 1,
      },
    },
    'aria-label': {
      name: 'aria-label',
      description: 'Add this if and only aria-hidden is false',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    size: 4,
    'aria-hidden': true,
  },
}

export const AccessibilityNew = (args: StorybookArgs): LegacyReactElement => (
  <Icon.AccessibilityNew {...args} />
)

export const AccessibleForward = (args: StorybookArgs): LegacyReactElement => (
  <Icon.AccessibleForward {...args} />
)

export const AccountBalance = (args: StorybookArgs): LegacyReactElement => (
  <Icon.AccountBalance {...args} />
)

export const AccountBox = (args: StorybookArgs): LegacyReactElement => (
  <Icon.AccountBox {...args} />
)

export const AccountCircle = (args: StorybookArgs): LegacyReactElement => (
  <Icon.AccountCircle {...args} />
)

export const Add = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Add {...args} />
)

export const AddCircle = (args: StorybookArgs): LegacyReactElement => (
  <Icon.AddCircle {...args} />
)

export const AddCircleOutline = (args: StorybookArgs): LegacyReactElement => (
  <Icon.AddCircleOutline {...args} />
)

export const Alarm = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Alarm {...args} />
)

export const AlternateEmail = (args: StorybookArgs): LegacyReactElement => (
  <Icon.AlternateEmail {...args} />
)

export const Announcement = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Announcement {...args} />
)

export const ArrowBack = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ArrowBack {...args} />
)

export const ArrowDownward = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ArrowDownward {...args} />
)

export const ArrowDropDown = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ArrowDropDown {...args} />
)

export const ArrowDropUp = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ArrowDropUp {...args} />
)

export const ArrowForward = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ArrowForward {...args} />
)

export const ArrowUpward = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ArrowUpward {...args} />
)

export const Api = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Api {...args} />
)

export const Assessment = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Assessment {...args} />
)

export const AttachFile = (args: StorybookArgs): LegacyReactElement => (
  <Icon.AttachFile {...args} />
)

export const AttachMoney = (args: StorybookArgs): LegacyReactElement => (
  <Icon.AttachMoney {...args} />
)

export const Autorenew = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Autorenew {...args} />
)

export const Backpack = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Backpack {...args} />
)

export const Bathtub = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Bathtub {...args} />
)

export const Bedding = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Bedding {...args} />
)

export const Bookmark = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Bookmark {...args} />
)

export const BugReport = (args: StorybookArgs): LegacyReactElement => (
  <Icon.BugReport {...args} />
)

export const Build = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Build {...args} />
)

export const CalendarToday = (args: StorybookArgs): LegacyReactElement => (
  <Icon.CalendarToday {...args} />
)

export const Campaign = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Campaign {...args} />
)

export const Camping = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Camping {...args} />
)

export const Cancel = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Cancel {...args} />
)

export const Chat = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Chat {...args} />
)

export const Check = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Check {...args} />
)

export const CheckBoxOutlineBlank = (
  args: StorybookArgs
): LegacyReactElement => <Icon.CheckBoxOutlineBlank {...args} />

export const CheckCircle = (args: StorybookArgs): LegacyReactElement => (
  <Icon.CheckCircle {...args} />
)

export const CheckCircleOutline = (args: StorybookArgs): LegacyReactElement => (
  <Icon.CheckCircleOutline {...args} />
)

export const Checkroom = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Checkroom {...args} />
)

export const CleanHands = (args: StorybookArgs): LegacyReactElement => (
  <Icon.CleanHands {...args} />
)

export const Clothes = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Clothes {...args} />
)

export const Close = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Close {...args} />
)

export const ClosedCaption = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ClosedCaption {...args} />
)

export const Cloud = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Cloud {...args} />
)

export const Code = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Code {...args} />
)

export const Comment = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Comment {...args} />
)

export const ConnectWithoutContact = (
  args: StorybookArgs
): LegacyReactElement => <Icon.ConnectWithoutContact {...args} />

export const Construction = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Construction {...args} />
)

export const ConstructionWorker = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ConstructionWorker {...args} />
)

export const ContactPage = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ContactPage {...args} />
)

export const ContentCopy = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ContentCopy {...args} />
)

export const Coronavirus = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Coronavirus {...args} />
)

export const CreditCard = (args: StorybookArgs): LegacyReactElement => (
  <Icon.CreditCard {...args} />
)

export const Deck = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Deck {...args} />
)

export const DeleteIcon = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Delete {...args} />
)

export const DeviceThermostat = (args: StorybookArgs): LegacyReactElement => (
  <Icon.DeviceThermostat {...args} />
)

export const Directions = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Directions {...args} />
)

export const DirectionsBike = (args: StorybookArgs): LegacyReactElement => (
  <Icon.DirectionsBike {...args} />
)

export const DirectionsBus = (args: StorybookArgs): LegacyReactElement => (
  <Icon.DirectionsBus {...args} />
)

export const DirectionsCar = (args: StorybookArgs): LegacyReactElement => (
  <Icon.DirectionsCar {...args} />
)

export const DirectionsWalk = (args: StorybookArgs): LegacyReactElement => (
  <Icon.DirectionsWalk {...args} />
)

export const DoNotDisturb = (args: StorybookArgs): LegacyReactElement => (
  <Icon.DoNotDisturb {...args} />
)

export const DoNotTouch = (args: StorybookArgs): LegacyReactElement => (
  <Icon.DoNotTouch {...args} />
)

export const DragHandle = (args: StorybookArgs): LegacyReactElement => (
  <Icon.DragHandle {...args} />
)

export const Eco = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Eco {...args} />
)

export const Edit = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Edit {...args} />
)

export const ElectricalServices = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ElectricalServices {...args} />
)

export const EmojiEvents = (args: StorybookArgs): LegacyReactElement => (
  <Icon.EmojiEvents {...args} />
)

export const Error = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Error {...args} />
)

export const ErrorOutline = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ErrorOutline {...args} />
)

export const Event = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Event {...args} />
)

export const ExpandLess = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ExpandLess {...args} />
)

export const ExpandMore = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ExpandMore {...args} />
)

export const Facebook = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Facebook {...args} />
)

export const FastForward = (args: StorybookArgs): LegacyReactElement => (
  <Icon.FastForward {...args} />
)

export const FastRewind = (args: StorybookArgs): LegacyReactElement => (
  <Icon.FastRewind {...args} />
)

export const Favorite = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Favorite {...args} />
)

export const FavoriteBorder = (args: StorybookArgs): LegacyReactElement => (
  <Icon.FavoriteBorder {...args} />
)

export const Fax = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Fax {...args} />
)

export const FileDownload = (args: StorybookArgs): LegacyReactElement => (
  <Icon.FileDownload {...args} />
)

export const FilePresent = (args: StorybookArgs): LegacyReactElement => (
  <Icon.FilePresent {...args} />
)

export const FileUpload = (args: StorybookArgs): LegacyReactElement => (
  <Icon.FileUpload {...args} />
)

export const FilterAlt = (args: StorybookArgs): LegacyReactElement => (
  <Icon.FilterAlt {...args} />
)

export const FilterList = (args: StorybookArgs): LegacyReactElement => (
  <Icon.FilterList {...args} />
)

export const Fingerprint = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Fingerprint {...args} />
)

export const FirstPage = (args: StorybookArgs): LegacyReactElement => (
  <Icon.FirstPage {...args} />
)

export const Flag = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Flag {...args} />
)

export const Flickr = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Flickr {...args} />
)

export const Flight = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Flight {...args} />
)

export const Flooding = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Flooding {...args} />
)

export const Folder = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Folder {...args} />
)

export const FolderOpen = (args: StorybookArgs): LegacyReactElement => (
  <Icon.FolderOpen {...args} />
)

export const FormatQuote = (args: StorybookArgs): LegacyReactElement => (
  <Icon.FormatQuote {...args} />
)

export const FormatSize = (args: StorybookArgs): LegacyReactElement => (
  <Icon.FormatSize {...args} />
)

export const Forum = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Forum {...args} />
)

export const Github = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Github {...args} />
)

export const GridView = (args: StorybookArgs): LegacyReactElement => (
  <Icon.GridView {...args} />
)

export const GroupAdd = (args: StorybookArgs): LegacyReactElement => (
  <Icon.GroupAdd {...args} />
)

export const Groups = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Groups {...args} />
)

export const Hearing = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Hearing {...args} />
)

export const Help = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Help {...args} />
)

export const HelpOutline = (args: StorybookArgs): LegacyReactElement => (
  <Icon.HelpOutline {...args} />
)

export const HighlightOff = (args: StorybookArgs): LegacyReactElement => (
  <Icon.HighlightOff {...args} />
)

export const History = (args: StorybookArgs): LegacyReactElement => (
  <Icon.History {...args} />
)

export const Home = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Home {...args} />
)

export const Hospital = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Hospital {...args} />
)

export const Hotel = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Hotel {...args} />
)

export const HourglassEmpty = (args: StorybookArgs): LegacyReactElement => (
  <Icon.HourglassEmpty {...args} />
)

export const Hurricane = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Hurricane {...args} />
)

export const Identification = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Identification {...args} />
)

export const Image = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Image {...args} />
)

export const Info = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Info {...args} />
)

export const InfoOutline = (args: StorybookArgs): LegacyReactElement => (
  <Icon.InfoOutline {...args} />
)

export const Insights = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Insights {...args} />
)

export const Instagram = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Instagram {...args} />
)

export const Keyboard = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Keyboard {...args} />
)

export const Label = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Label {...args} />
)

export const Language = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Language {...args} />
)

export const LastPage = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LastPage {...args} />
)

export const Launch = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Launch {...args} />
)

export const Lightbulb = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Lightbulb {...args} />
)

export const LightbulbOutline = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LightbulbOutline {...args} />
)

export const Link = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Link {...args} />
)

export const LinkedIn = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LinkedIn {...args} />
)

export const LinkOff = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LinkOff {...args} />
)

export const List = (args: StorybookArgs): LegacyReactElement => (
  <Icon.List {...args} />
)

export const LocalCafe = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LocalCafe {...args} />
)

export const LocalFireDepartment = (
  args: StorybookArgs
): LegacyReactElement => <Icon.LocalFireDepartment {...args} />

export const LocalGasStation = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LocalGasStation {...args} />
)

export const LocalGroceryStore = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LocalGroceryStore {...args} />
)

export const LocalHospital = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LocalHospital {...args} />
)

export const LocalLaundryService = (
  args: StorybookArgs
): LegacyReactElement => <Icon.LocalLaundryService {...args} />

export const LocalLibrary = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LocalLibrary {...args} />
)

export const LocalOffer = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LocalOffer {...args} />
)

export const LocalParking = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LocalParking {...args} />
)

export const LocalPharmacy = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LocalPharmacy {...args} />
)

export const LocalPolice = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LocalPolice {...args} />
)

export const LocalTaxi = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LocalTaxi {...args} />
)

export const LocationCity = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LocationCity {...args} />
)

export const LocationOn = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LocationOn {...args} />
)

export const Lock = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Lock {...args} />
)

export const LockOpen = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LockOpen {...args} />
)

export const LockOutline = (args: StorybookArgs): LegacyReactElement => (
  <Icon.LockOutline {...args} />
)

export const Login = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Login {...args} />
)

export const Logout = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Logout {...args} />
)

export const Loop = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Loop {...args} />
)

export const Mail = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Mail {...args} />
)

export const MailOutline = (args: StorybookArgs): LegacyReactElement => (
  <Icon.MailOutline {...args} />
)

export const Map = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Map {...args} />
)

export const Masks = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Masks {...args} />
)

export const MedicalServices = (args: StorybookArgs): LegacyReactElement => (
  <Icon.MedicalServices {...args} />
)

export const Menu = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Menu {...args} />
)

export const MilitaryTech = (args: StorybookArgs): LegacyReactElement => (
  <Icon.MilitaryTech {...args} />
)

export const MoreHoriz = (args: StorybookArgs): LegacyReactElement => (
  <Icon.MoreHoriz {...args} />
)

export const MoreVert = (args: StorybookArgs): LegacyReactElement => (
  <Icon.MoreVert {...args} />
)

export const MyLocation = (args: StorybookArgs): LegacyReactElement => (
  <Icon.MyLocation {...args} />
)

export const NavigateBefore = (args: StorybookArgs): LegacyReactElement => (
  <Icon.NavigateBefore {...args} />
)

export const NavigateNext = (args: StorybookArgs): LegacyReactElement => (
  <Icon.NavigateNext {...args} />
)

export const NavigateFarBefore = (args: StorybookArgs): LegacyReactElement => (
  <Icon.NavigateFarBefore {...args} />
)

export const NavigateFarNext = (args: StorybookArgs): LegacyReactElement => (
  <Icon.NavigateFarNext {...args} />
)

export const NearMe = (args: StorybookArgs): LegacyReactElement => (
  <Icon.NearMe {...args} />
)

export const Notifications = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Notifications {...args} />
)

export const NotificationsActive = (
  args: StorybookArgs
): LegacyReactElement => <Icon.NotificationsActive {...args} />

export const NotificationsNone = (args: StorybookArgs): LegacyReactElement => (
  <Icon.NotificationsNone {...args} />
)

export const NotificationsOff = (args: StorybookArgs): LegacyReactElement => (
  <Icon.NotificationsOff {...args} />
)

export const Park = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Park {...args} />
)

export const People = (args: StorybookArgs): LegacyReactElement => (
  <Icon.People {...args} />
)

export const Person = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Person {...args} />
)

export const Pets = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Pets {...args} />
)

export const Phone = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Phone {...args} />
)

export const PhotoCamera = (args: StorybookArgs): LegacyReactElement => (
  <Icon.PhotoCamera {...args} />
)

export const Print = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Print {...args} />
)

export const PriorityHigh = (args: StorybookArgs): LegacyReactElement => (
  <Icon.PriorityHigh {...args} />
)

export const PublicIcon = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Public {...args} />
)

export const PushPin = (args: StorybookArgs): LegacyReactElement => (
  <Icon.PushPin {...args} />
)

export const RadioButtonUnchecked = (
  args: StorybookArgs
): LegacyReactElement => <Icon.RadioButtonUnchecked {...args} />

export const Rain = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Rain {...args} />
)

export const ReduceCapacity = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ReduceCapacity {...args} />
)

export const Remove = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Remove {...args} />
)

export const RemoveCircle = (args: StorybookArgs): LegacyReactElement => (
  <Icon.RemoveCircle {...args} />
)

export const Report = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Report {...args} />
)

export const Restaurant = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Restaurant {...args} />
)

export const RssFeed = (args: StorybookArgs): LegacyReactElement => (
  <Icon.RssFeed {...args} />
)

export const SafetyDivider = (args: StorybookArgs): LegacyReactElement => (
  <Icon.SafetyDivider {...args} />
)

export const Sanitizer = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Sanitizer {...args} />
)

export const SaveAlt = (args: StorybookArgs): LegacyReactElement => (
  <Icon.SaveAlt {...args} />
)

export const SevereWeather = (args: StorybookArgs): LegacyReactElement => (
  <Icon.SevereWeather {...args} />
)

export const Schedule = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Schedule {...args} />
)

export const School = (args: StorybookArgs): LegacyReactElement => (
  <Icon.School {...args} />
)

export const Science = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Science {...args} />
)

export const Search = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Search {...args} />
)

export const Security = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Security {...args} />
)

export const Send = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Send {...args} />
)

export const SentimentDissatisfied = (
  args: StorybookArgs
): LegacyReactElement => <Icon.SentimentDissatisfied {...args} />

export const SentimentNeutral = (args: StorybookArgs): LegacyReactElement => (
  <Icon.SentimentNeutral {...args} />
)

export const SentimentSatisfied = (args: StorybookArgs): LegacyReactElement => (
  <Icon.SentimentSatisfied {...args} />
)

export const SentimentSatisfiedAlt = (
  args: StorybookArgs
): LegacyReactElement => <Icon.SentimentSatisfiedAlt {...args} />
export const SentimentVeryDissatisfied = (
  args: StorybookArgs
): LegacyReactElement => <Icon.SentimentVeryDissatisfied {...args} />

export const Settings = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Settings {...args} />
)

export const Share = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Share {...args} />
)

export const Shield = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Shield {...args} />
)

export const ShoppingBasket = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ShoppingBasket {...args} />
)

export const Snow = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Snow {...args} />
)

export const Soap = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Soap {...args} />
)

export const SocialDistance = (args: StorybookArgs): LegacyReactElement => (
  <Icon.SocialDistance {...args} />
)

export const SortArrow = (args: StorybookArgs): LegacyReactElement => (
  <Icon.SortArrow {...args} />
)

export const Spellcheck = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Spellcheck {...args} />
)

export const Star = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Star {...args} />
)

export const StarHalf = (args: StorybookArgs): LegacyReactElement => (
  <Icon.StarHalf {...args} />
)

export const StarOutline = (args: StorybookArgs): LegacyReactElement => (
  <Icon.StarOutline {...args} />
)

export const Store = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Store {...args} />
)

export const Support = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Support {...args} />
)

export const SupportAgent = (args: StorybookArgs): LegacyReactElement => (
  <Icon.SupportAgent {...args} />
)

export const TextFields = (args: StorybookArgs): LegacyReactElement => (
  <Icon.TextFields {...args} />
)

export const ThumbDownAlt = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ThumbDownAlt {...args} />
)

export const ThumbUpAlt = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ThumbUpAlt {...args} />
)

export const Timer = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Timer {...args} />
)

export const ToggleOff = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ToggleOff {...args} />
)

export const ToggleOn = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ToggleOn {...args} />
)

export const Topic = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Topic {...args} />
)

export const Tornado = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Tornado {...args} />
)

export const Translate = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Translate {...args} />
)

export const TrendingDown = (args: StorybookArgs): LegacyReactElement => (
  <Icon.TrendingDown {...args} />
)

export const TrendingUp = (args: StorybookArgs): LegacyReactElement => (
  <Icon.TrendingUp {...args} />
)

export const Twitter = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Twitter {...args} />
)

export const Undo = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Undo {...args} />
)

export const UnfoldLess = (args: StorybookArgs): LegacyReactElement => (
  <Icon.UnfoldLess {...args} />
)

export const UnfoldMore = (args: StorybookArgs): LegacyReactElement => (
  <Icon.UnfoldMore {...args} />
)

export const Update = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Update {...args} />
)

export const UploadFile = (args: StorybookArgs): LegacyReactElement => (
  <Icon.UploadFile {...args} />
)

export const Verified = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Verified {...args} />
)

export const VerifiedUser = (args: StorybookArgs): LegacyReactElement => (
  <Icon.VerifiedUser {...args} />
)

export const Visibility = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Visibility {...args} />
)

export const VisibilityOff = (args: StorybookArgs): LegacyReactElement => (
  <Icon.VisibilityOff {...args} />
)

export const VolumeOff = (args: StorybookArgs): LegacyReactElement => (
  <Icon.VolumeOff {...args} />
)

export const Warning = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Warning {...args} />
)

export const Wash = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Wash {...args} />
)

export const Wifi = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Wifi {...args} />
)

export const Work = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Work {...args} />
)

export const X = (args: StorybookArgs): LegacyReactElement => (
  <Icon.X {...args} />
)

export const Youtube = (args: StorybookArgs): LegacyReactElement => (
  <Icon.Youtube {...args} />
)

export const ZoomIn = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ZoomIn {...args} />
)

export const ZoomOutMap = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ZoomOutMap {...args} />
)

export const ZoomOut = (args: StorybookArgs): LegacyReactElement => (
  <Icon.ZoomOut {...args} />
)
