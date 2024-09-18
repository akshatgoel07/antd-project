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
import Image from "next/image";
import QRCode from "./assets/qr-code.jpeg";
import CommonRoom from "./assets/common-room.jpeg";
import Bed from "./assets/bed.jpeg";
import Logo from "./assets/logo.png";
import styled from "styled-components";

const { Title, Paragraph, Text } = Typography;

const HomeWrapper = styled.div`
	position: relative;

	.top-right-image {
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

		.top-right-text {
			position: absolute;
			top: 10px;
			right: 10px;
			background-color: rgba(255, 255, 255, 0.8);
			padding: 5px 10px;
			border-radius: 5px;

			span {
				color: #014a7c;
				font-size: 16px;
				font-weight: bold;
			}
		}
	}

	.logo-image {
		width: 100%;
		height: auto;
	}

	.winter-specials-title {
		color: #00a1cc;
		font-size: 48px;
		font-weight: bold;
		line-height: 80%;
	}

	.winter-specials-subtitle {
		color: #949494;
	}

	.november-to-march {
		color: #ba9449;
	}

	.bed-image-container {
		position: relative;
		height: 400px;

		@media (max-width: 991px) {
			display: none;
		}

		.bed-image-wrapper {
			position: absolute;
			top: 250px;
			right: 75px;
			width: 200px;
			height: 200px;
			border-radius: 50%;
			overflow: hidden;
			border: 6px solid #014a7c;
			z-index: 3;
		}
	}

	.qr-code-row {
		margin-top: 32px;
		@media (max-width: 767px) {
			flex-direction: row !important;
			justify-content: center;
			align-items: center;
		}

		.qr-code-image {
			width: 100px;
			height: 100px;

			@media (max-width: 767px) {
				width: 60px;
				height: 60px;
			}
		}

		.arrow-left-icon {
			font-size: 60px;
			color: #1890ff;
			margin: 0 8px;

			@media (max-width: 767px) {
				font-size: 16px;
				margin: 0 4px;
			}
		}
	}

	.categories-row {
		margin-top: 32px;

		.category-item {
			background-color: #949494;
			padding: 16px;
			border-radius: 8px;
			display: flex;
			align-items: center;

			.category-number {
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

				span {
					color: white;
					font-size: 18px;

					@media (max-width: 767px) {
						font-size: 14px;
					}
				}
			}

			.category-text {
				font-size: 16px;
				color: white;

				@media (max-width: 767px) {
					font-size: 14px;
				}
			}
		}
	}

	.footer-row {
		margin-top: 32px;
		padding: 16px 0;
		border-top: 1px solid #f0f0f0;

		.footer-inner-row {
			padding: 18px 26px;
			background-color: #062134;
			border-radius: 8px;

			.footer-col {
				text-align: center;
				margin-bottom: 10px;

				.footer-icon {
					color: #ffffff;
				}

				.footer-text {
					color: #ffffff;
				}
			}
		}
	}
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
					<div className="top-right-image">
						<Image
							src={CommonRoom}
							alt="Common Room"
							layout="fill"
							objectFit="cover"
						/>
						<div className="top-right-text">
							<span>JUST DON'T STAY LIVE A LITTLE</span>
						</div>
					</div>

					<Row gutter={[16, 16]}>
						<Col xs={24} sm={24} md={12}>
							<Space direction="vertical">
								<Space>
									<Image
										className="logo-image"
										src={Logo}
										alt="Logo"
										width={200}
										height={100}
									/>
								</Space>
								<div className="winter-specials-title">
									WINTER SPECIALS IN{" "}
									<span className="winter-specials-subtitle">
										SUMMER
									</span>
								</div>
								<Paragraph>
									Book your winter stay now and save{" "}
									<Text strong>BIG! </Text> If you need{" "}
									<Text strong>furnished housing </Text> in
									the Boston area during{" "}
									<span className="november-to-march">
										November to March
									</span>{" "}
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
							<div className="bed-image-container">
								<div className="bed-image-wrapper">
									<Image
										src={Bed}
										alt="Bed"
										layout="fill"
										objectFit="cover"
									/>
								</div>
							</div>
						</Col>
					</Row>

					<Row
						className="qr-code-row"
						justify="center"
						align="middle"
						gutter={[16, 16]}
					>
						<Col>
							<Image
								className="qr-code-image"
								src={QRCode}
								alt="QR Code"
								width={100}
								height={100}
							/>
						</Col>
						<Col>
							<ArrowLeftOutlined className="arrow-left-icon" />
						</Col>
						<Col>
							<Button size="large" shape="round">
								Book Now
							</Button>
						</Col>
					</Row>

					<Row
						className="categories-row"
						justify="center"
						gutter={[16, 16]}
					>
						<Col xs={12} sm={12} md={12} lg={12}>
							<div className="category-item">
								<div className="category-number">
									<span>1</span>
								</div>
								<Text className="category-text" strong>
									MILITARY HOUSING
								</Text>
							</div>
						</Col>
						<Col xs={12} sm={12} md={12} lg={12}>
							<div className="category-item">
								<div className="category-number">
									<span>2</span>
								</div>
								<Text className="category-text" strong>
									MEDICAL STAYS
								</Text>
							</div>
						</Col>
						<Col xs={12} sm={12} md={12} lg={12}>
							<div className="category-item">
								<div className="category-number">
									<span>3</span>
								</div>
								<Text className="category-text" strong>
									STUDENT HOUSING
								</Text>
							</div>
						</Col>
						<Col xs={12} sm={12} md={12} lg={12}>
							<div className="category-item">
								<div className="category-number">
									<span>4</span>
								</div>
								<Text className="category-text" strong>
									SENIOR STAYS
								</Text>
							</div>
						</Col>
					</Row>

					<Row className="footer-row" justify="center" align="middle">
						<Col span={24}>
							<Row
								className="footer-inner-row"
								justify="center"
								align="middle"
							>
								<Col
									className="footer-col"
									xs={24}
									sm={24}
									md={8}
								>
									<Space>
										<PhoneFilled className="footer-icon" />
										<Text className="footer-text">
											+1 617-855-9576
										</Text>
									</Space>
								</Col>
								<Col
									className="footer-col"
									xs={24}
									sm={24}
									md={8}
								>
									<Space>
										<GlobalOutlined className="footer-icon" />
										<Text className="footer-text">
											starsofboston.com
										</Text>
									</Space>
								</Col>
								<Col
									className="footer-col"
									xs={24}
									sm={24}
									md={8}
								>
									<Space>
										<MailFilled className="footer-icon" />
										<Text className="footer-text">
											info@starsofboston.com
										</Text>
									</Space>
								</Col>
							</Row>
						</Col>
					</Row>
				</HomeWrapper>
			</Modal>
		</>
	);
};

export default Home;
