"use client";
import React, { useState } from "react";
import { Modal, Typography, Button, Row, Col, Space } from "antd";
import {
	StarOutlined,
	PhoneFilled,
	GlobalOutlined,
	MailFilled,
	ArrowLeftOutlined,
} from "@ant-design/icons";
import QRCode from "./assets/qr-code.jpeg";
import CommonRoom from "./assets/common-room.jpeg";
import Bed from "./assets/bed.jpeg";
import Logo from "./assets/logo.png";
import styled from "styled-components";

const { Title, Paragraph, Text } = Typography;

const HomeWrapper = styled.div`
	position: relative;
`;

const TopRightImageContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 400px;
	height: 400px;
	border-radius: 0 0 0 100%;
	overflow: hidden;
	z-index: 2;

	@media (max-width: 767px) {
		position: relative;
		width: 100%;
		height: auto;
		border-radius: 0;
	}
`;

const TopRightImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;

	@media (max-width: 767px) {
		height: auto;
	}
`;

const TopRightText = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	background-color: rgba(255, 255, 255, 0.8);
	padding: 5px 10px;
	border-radius: 5px;
`;

const TopRightTextInner = styled(Text)`
	color: #014a7c;
	font-size: 16px;
	font-weight: bold;
`;

const LogoImage = styled.img`
	width: 100%;
	object-fit: cover;
`;

const WinterSpecialsTitle = styled.span`
	color: #00a1cc;
	font-size: 48px;
	font-weight: bold;
	line-height: 80%;
`;

const WinterSpecialsSubtitle = styled.span`
	color: #949494;
`;

const NovemberToMarch = styled(Text)`
	color: #ba9449;
`;

const BedImageContainer = styled.div`
	position: relative;
	height: 400px;

	@media (max-width: 991px) {
		display: none;
	}
`;

const BedImageWrapper = styled.div`
	position: absolute;
	top: 250px;
	right: 75px;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	overflow: hidden;
	border: 6px solid #014a7c;
	z-index: 3;
`;

const BedImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const QRCodeImage = styled.img`
	width: 100px;
	height: 100px;

	@media (max-width: 767px) {
		width: 60px;
		height: 60px;
	}
`;
const ArrowLeftIcon = styled(ArrowLeftOutlined)`
	font-size: 60px;
	color: #1890ff;
	margin: 0 8px;

	@media (max-width: 767px) {
		font-size: 16px;
		margin: 0 4px;
	}
`;
const QRCodeRow = styled(Row)`
	@media (max-width: 767px) {
		flex-direction: row !important;
		justify-content: center;
		align-items: center;
	}
`;

const QRCodeCol = styled(Col)`
	@media (max-width: 767px) {
		width: auto !important;
		margin: 0 8px;
	}
`;

const ArrowCol = styled(Col)`
	@media (max-width: 767px) {
		width: auto !important;
		margin: 0 8px;
	}
`;

const BookNowCol = styled(Col)`
	@media (max-width: 767px) {
		width: auto !important;
		margin: 0 4px;
	}
`;
const TopRightTextContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	color: white;
	padding: 5px 10px;
	border-radius: 0 0 0 10px;
	z-index: 1;
`;

const CategoriesRow = styled(Row)`
	margin-top: 32px;
`;

const CategoryItem = styled.div`
	background-color: #949494;
	padding: 16px;
	border-radius: 8px;
	display: flex;
	align-items: center;
`;

const CategoryNumber = styled.div`
	background-color: #00a1cc;
	color: white;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 16px;
	flex-shrink: 0;

	@media (max-width: 767px) {
		width: 32px;
		height: 32px;
	}
`;

const CategoryNumberText = styled(Text)`
	color: white;
	font-size: 18px;

	@media (max-width: 767px) {
		font-size: 14px;
	}
`;

const CategoryText = styled(Text)`
	font-size: 16px;
	color: white;

	@media (max-width: 767px) {
		font-size: 14px;
	}
`;

const FooterRow = styled(Row)`
	margin-top: 32px;
	padding: 16px 0;
	border-top: 1px solid #f0f0f0;
`;

const FooterInnerRow = styled(Row)`
	padding: 18px 26px;
	background-color: #062134;
	border-radius: 8px;
`;

const FooterCol = styled(Col)`
	text-align: center;
	margin-bottom: 10px;
`;

const FooterIcon = styled.span`
	color: #ffffff;
`;

const FooterText = styled(Text)`
	color: #ffffff;
`;

const Home = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Button type="primary" onClick={showModal}>
				Open Modal
			</Button>

			<Modal
				title={null}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				width={800}
				style={{ top: 10 }}
			>
				<HomeWrapper>
					<TopRightImageContainer>
						<TopRightImage src={CommonRoom} alt="Common Room" />
						<TopRightText>
							<TopRightTextInner strong>
								JUST DON'T STAY LIVE A LITTLE
							</TopRightTextInner>
						</TopRightText>
					</TopRightImageContainer>

					<Row gutter={[16, 16]}>
						<Col xs={24} sm={24} md={12}>
							<Space direction="vertical">
								<Space>
									<LogoImage src={Logo} alt="Common Room" />
								</Space>
								<WinterSpecialsTitle level={1}>
									WINTER SPECIALS IN{" "}
									<WinterSpecialsSubtitle>
										SUMMER
									</WinterSpecialsSubtitle>
								</WinterSpecialsTitle>
								<Paragraph>
									Book your winter stay now and save{" "}
									<Text strong>BIG! </Text> If you need{" "}
									<Text strong>furnished housing </Text> in
									the Boston area during{" "}
									<NovemberToMarch>
										November to March
									</NovemberToMarch>{" "}
									we got you covered.
									<Text strong>
										15% savings for stays 28 days or longer{" "}
									</Text>{" "}
									for the following groups.
								</Paragraph>
								<Text strong>
									• Reservations must be booked by September
									30th
								</Text>
							</Space>
						</Col>
						<Col xs={24} sm={24} md={12}>
							<BedImageContainer>
								<BedImageWrapper>
									<BedImage src={Bed} alt="Bed" />
								</BedImageWrapper>
							</BedImageContainer>
						</Col>
					</Row>

					<QRCodeRow
						justify="center"
						align="middle"
						gutter={[16, 16]}
					>
						<QRCodeCol>
							<QRCodeImage src={QRCode} alt="QR Code" />
						</QRCodeCol>
						<ArrowCol>
							<ArrowLeftIcon />
						</ArrowCol>
						<BookNowCol>
							<Button size="large" shape="round">
								Book Now
							</Button>
						</BookNowCol>
					</QRCodeRow>

					<TopRightTextContainer>
						<Text>JUST DON'T STAY LIVE A LITTLE</Text>
					</TopRightTextContainer>

					<CategoriesRow justify="center" gutter={[16, 16]}>
						<Col xs={12} sm={12} md={12} lg={12}>
							<CategoryItem>
								<CategoryNumber>
									<CategoryNumberText>1</CategoryNumberText>
								</CategoryNumber>
								<CategoryText strong>
									MILITARY HOUSING
								</CategoryText>
							</CategoryItem>
						</Col>
						<Col xs={12} sm={12} md={12} lg={12}>
							<CategoryItem>
								<CategoryNumber>
									<CategoryNumberText>2</CategoryNumberText>
								</CategoryNumber>
								<CategoryText strong>
									MEDICAL STAYS
								</CategoryText>
							</CategoryItem>
						</Col>
						<Col xs={12} sm={12} md={12} lg={12}>
							<CategoryItem>
								<CategoryNumber>
									<CategoryNumberText>3</CategoryNumberText>
								</CategoryNumber>
								<CategoryText strong>
									STUDENT HOUSING
								</CategoryText>
							</CategoryItem>
						</Col>
						<Col xs={12} sm={12} md={12} lg={12}>
							<CategoryItem>
								<CategoryNumber>
									<CategoryNumberText>4</CategoryNumberText>
								</CategoryNumber>
								<CategoryText strong>SENIOR STAYS</CategoryText>
							</CategoryItem>
						</Col>
					</CategoriesRow>

					<FooterRow justify="center" align="middle">
						<Col span={24}>
							<FooterInnerRow justify="center" align="middle">
								<FooterCol xs={24} sm={24} md={8}>
									<Space>
										<FooterIcon>
											<PhoneFilled />
										</FooterIcon>
										<FooterText>+1 617-855-9576</FooterText>
									</Space>
								</FooterCol>
								<FooterCol xs={24} sm={24} md={8}>
									<Space>
										<FooterIcon>
											<GlobalOutlined />
										</FooterIcon>
										<FooterText>
											starsofboston.com
										</FooterText>
									</Space>
								</FooterCol>
								<FooterCol xs={24} sm={24} md={8}>
									<Space>
										<FooterIcon>
											<MailFilled />
										</FooterIcon>
										<FooterText>
											info@starsofboston.com
										</FooterText>
									</Space>
								</FooterCol>
							</FooterInnerRow>
						</Col>
					</FooterRow>
				</HomeWrapper>
			</Modal>
		</>
	);
};

export default Home;
