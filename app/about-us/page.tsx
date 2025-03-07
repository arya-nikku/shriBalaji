import React from 'react'

export default function AboutUsPage() {
  return (
    <div>About us</div>
  )
}



// import { contextNavigation } from 'shared/constants/navigation';

// import { Header, Sidebar } from '@/components';
// import { Footer } from '@/components/footer';
// import { TrackPage } from '@/components/track-page';
// import { GRIEVANCE_MAIL, SOULSENSEI_SUPPORT_PHONE } from '@/constants/generic';
// import { SidebarProvider } from '@/hooks/sidebar-context';
// import { PageName } from '@/types';

// export default function ContactUsPage() {
// 	return (
// 		<div>
// 			<TrackPage pageName={PageName.CONTACT_US} />
// 			<div className="bg-[url('/images/tertiary-cover.png')] bg-cover bg-center">
// 				<div>
// 					<SidebarProvider>
// 						<Header
// 							pageName={PageName.CONTACT_US}
// 							homeUrl={contextNavigation().APP_HOME}
// 							redirectUrl={contextNavigation().CONTACT_US}
// 							logoutRedirectUrl={contextNavigation().CONTACT_US}
// 						/>
// 						<Sidebar
// 							pageName={PageName.CONTACT_US}
// 							redirectUrl={contextNavigation().CONTACT_US}
// 							logoutRedirectUrl={contextNavigation().CONTACT_US}
// 						/>
// 					</SidebarProvider>
// 				</div>
// 				<title>Contact Us | Address & Email Id | SoulSensei</title>
// 				<meta
// 					name="description"
// 					content="Have some questions, ideas or feedback, we're here to listen and support you on your spiritual journey. Contact us through email or meet us at our address. Get details here!"
// 				/>
// 				<meta
// 					property="og:title"
// 					content="Contact Us | Address & Email Id | SoulSensei"
// 				/>
// 				<meta
// 					property="og:description"
// 					content="Have some questions, ideas or feedback, we're here to listen and support you on your spiritual journey. Contact us through email or meet us at our address. Get details here!"
// 				/>
// 				<meta
// 					property="og:image"
// 					content={`${process.env.NEXT_PUBLIC_SELF_URL}/images/soulsensei-purple.jpg`}
// 				/>
// 				<div className="flex flex-col items-start justify-between text-white max-w-xl xl:max-w-5xl pt-30 pb-16 px-6 xl:pl-30 xl:pt-60 xl:pb-30">
// 					<p className="font-semibold text-4xl xl:text-6xl xl:leading-tight">
// 						Contact Us
// 					</p>
// 				</div>
// 			</div>
// 			<div className="flex flex-col ">
// 				<div className="flex flex-col bg-white px-6 py-20 lg:px-30 gap-6">
// 					<div>
// 						<p className="text-custom-gray-900 font-medium text-xl">
// 							You may contact us using the information below:
// 						</p>
// 					</div>
// 					<div className="flex flex-col gap-6 lg:gap-8">
// 						<p className="font-normal text-custom-gray-700">
// 							<span className="font-semibold">E-Mail ID: </span>
// 							<a
// 								className="text-blue-500"
// 								href={`mailto:${GRIEVANCE_MAIL}`}
// 							>
// 								{GRIEVANCE_MAIL}
// 							</a>
// 							<br />
// 							<span className="font-semibold">
// 								Customer Support:{' '}
// 							</span>
// 							<a
// 								className="text-blue-500"
// 								href={`tel:${SOULSENSEI_SUPPORT_PHONE.value}`}
// 							>
// 								{SOULSENSEI_SUPPORT_PHONE.text}
// 							</a>
// 							<br />
// 							<br />
// 							<span className="font-semibold">
// 								Merchant Legal entity name:{' '}
// 							</span>
// 							RNJP TECHNOLOGIES PRIVATE LIMITED
// 							<br />
// 							<span className="font-semibold">
// 								Registered Address:{' '}
// 							</span>
// 							Office 2, 22, Paradise Villa Comp., Bhulabhai Road,
// 							Cumballa Hill, Mumbai MAHARASHTRA 400026
// 							<br />
// 							<span className="font-semibold">
// 								Operational Address:{' '}
// 							</span>
// 							Coworks India Pvt Limited, 2nd Floor, Century
// 							Textiles and Industries Ltd, Century Bhavan, Dr
// 							Annie Besant Road, Worli, Mumbai MAHARASHTRA 400030
// 							<br />
// 						</p>
// 						{/* <p className="font-normal text-custom-gray-500">
// 							Last updated on {OTHER_POLICIES_DATE}
// 						</p> */}
// 					</div>
// 				</div>
// 				<Footer />
// 			</div>
// 		</div>
// 	);
// }

