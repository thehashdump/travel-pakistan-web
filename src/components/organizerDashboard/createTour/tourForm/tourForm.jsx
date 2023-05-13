/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import {
	Stepper,
	Step,
	StepLabel,
	Button,
	Typography,
	TextField,
	FormControl,
	FormLabel,
	FormGroup,
	FormControlLabel,
	Checkbox,
	LinearProgress
} from '@material-ui/core';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { toast, ToastContainer } from 'react-toastify';
import storage from '../../../../firebase';
import Styles from './tourForm.module.scss';
import axios from '../../../../utils/axiosConfig';

const steps = ['Basic Info', 'Pickup and Route Info', 'Price and Facilities', 'Images', 'Itinerary'];

const TourForm = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	const [activeStep, setActiveStep] = useState(0);
	const [name, setName] = useState('');
	const [destination, setDestination] = useState('');
	const [durationDays, setDurationDays] = useState(0);
	const [capacity, setCapacity] = useState(0);
	const [requirements, setRequirements] = useState([]);
	const [tags, setTags] = useState([]);
	const [images, setImages] = useState([]);
	const [description, setDescription] = useState('');
	const [route, setRoute] = useState([]);
	const [tips, setTips] = useState([]);
	const [departureDate, setDepartureDate] = useState('');
	const [departureTime, setDepartureTime] = useState('');
	const [departureLocations, setDepartureLocations] = useState([]);
	const [price, setPrice] = useState({ adults: 0, children: 0 });
	const [inclusions, setInclusions] = useState([]);
	const [exclusions, setExclusions] = useState([]);
	const [itinerary, setItinerary] = useState({});
	const [overview, setOverview] = useState('');
	const [isUploading, setIsUploading] = useState(false);
	const [progresspercent, setProgresspercent] = useState(0);

	const handleFileUpload = async (e) => {
		setIsUploading(true);
		e.preventDefault();
		const { files } = e.target;
		if (!files) return;

		Array.from(files).forEach((file, index) => {
			if (index < 5) {
				const storageRef = ref(storage, `files/${file.name}${Date.now()}`);
				const uploadTask = uploadBytesResumable(storageRef, file);
				uploadTask.on(
					'state_changed',
					(snapshot) => {
						const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
						setProgresspercent(progress);
					},
					(error) => {
						alert(error);
					},
					() => {
						getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
							setImages((prevImages) => [...prevImages, downloadURL]);
						});
					}
				);
			} else {
				alert('You can only upload 5 images');
			}
		});
		setIsUploading(false);
		e.target.value = null;
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleDeleteImage = (index) => {
		const newImages = images.filter((image, i) => i !== index);
		setImages(newImages);
	};

	const handleSubmit = () => {
		const tour = {
			organizer: user._id,
			name,
			destination,
			durationDays,
			capacity,
			requirements,
			tags,
			images,
			description,
			route,
			tips,
			departureDate,
			departureTime,
			departureLocation: departureLocations,
			price,
			inclusions,
			exclusions,
			itinerary,
			overview
		};
		if (name === '' || destination === '' || durationDays === 0 || capacity === 0 || requirements.length === 0 || tags.length === 0 || images.length < 5 || description === '' || route.length === 0 || tips.length === 0 || departureDate === '' || departureTime === '' || departureLocations.length === 0 || price.adults === 0 || price.children === 0 || inclusions.length === 0 || exclusions.length === 0 || Object.keys(itinerary).length === 0 || overview === '') {
			toast.error('Please fill all the fields');
			return;
		}
		axios.post('create-tour', tour).then(() => {
			toast.success('Tour created successfully');
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		}).catch((err) => {
			console.log(err);
		});
	};

	const handleReset = () => {
		setActiveStep(0);
		setName('');
		setDestination('');
		setDurationDays('');
		setCapacity('');
		setRequirements([]);
		setTags([]);
		setImages([]);
		setDescription('');
		setRoute([]);
		setTips([]);
		setDepartureDate('');
		setDepartureTime('');
		setDepartureLocations([]);
		setPrice({ adults: '', children: '' });
		setInclusions([]);
		setExclusions([]);
		setItinerary({});
		setOverview('');
	};

	const getStepContent = (step) => {
		const dayArray = [];
		for (let i = 1; i <= durationDays; i++) {
			dayArray.push(i);
		}
		switch (step) {
		case 0:
			return (
				<FormControl fullWidth margin="normal">
					<FormLabel component="legend">Basic Info</FormLabel>
					<div className={Styles.inputContainer}>
						<TextField
							id="name"
							label="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className={Styles.input}
						/>
						<TextField
							id="destination"
							label="Destination"
							value={destination}
							onChange={(e) => setDestination(e.target.value)}
							className={Styles.input}
						/>
						<TextField
							id="durationDays"
							label="Duration (Days)"
							type="number"
							value={durationDays}
							onChange={(e) => setDurationDays(parseInt(e.target.value, 10))}
							className={Styles.input}
						/>
						<TextField
							id="capacity"
							label="Capacity"
							type="number"
							value={capacity}
							onChange={(e) => setCapacity(parseInt(e.target.value, 10))}
							className={Styles.input}
						/>
					</div>
					<TextField
						id="requirements"
						label="Requirements (comma separated)"
						multiline minRows={2}
						value={requirements.join(',')}
						onChange={(e) => setRequirements(e.target.value.split(','))}
					/>
					<FormGroup>
						<div className={Styles.tags}>
							<FormLabel component="legend" className={Styles.title}>Tags</FormLabel>
							<FormControlLabel control={<Checkbox checked={tags.includes('Adventure')} onChange={(e) => (e.target.checked ? setTags([...tags, 'Adventure']) : setTags(tags.filter((tag) => tag !== 'Adventure')))} />} label="Adventure" />
							<FormControlLabel control={<Checkbox checked={tags.includes('Trekking')} onChange={(e) => (e.target.checked ? setTags([...tags, 'Trekking']) : setTags(tags.filter((tag) => tag !== 'Trekking')))} />} label="Trekking" />
							<FormControlLabel control={<Checkbox checked={tags.includes('Nature')} onChange={(e) => (e.target.checked ? setTags([...tags, 'Nature']) : setTags(tags.filter((tag) => tag !== 'Nature')))} />} label="Nature" />
							<FormControlLabel control={<Checkbox checked={tags.includes('Sightseeing')} onChange={(e) => (e.target.checked ? setTags([...tags, 'Sightseeing']) : setTags(tags.filter((tag) => tag !== 'Sightseeing')))} />} label="Sightseeing" />
							<FormControlLabel control={<Checkbox checked={tags.includes('Photography')} onChange={(e) => (e.target.checked ? setTags([...tags, 'Photography']) : setTags(tags.filter((tag) => tag !== 'Photography')))} />} label="Photography" />
							<FormControlLabel control={<Checkbox checked={tags.includes('Fuel')} onChange={(e) => (e.target.checked ? setTags([...tags, 'Fuel']) : setTags(tags.filter((tag) => tag !== 'Fuel')))} />} label="Fuel" />
							<FormControlLabel control={<Checkbox checked={tags.includes('Food')} onChange={(e) => (e.target.checked ? setTags([...tags, 'Food']) : setTags(tags.filter((tag) => tag !== 'Food')))} />} label="Food" />
						</div>
					</FormGroup>
					<TextField id="description" label="Description" multiline minRows={1} value={description} onChange={(e) => setDescription(e.target.value)} />
				</FormControl>
			);
		case 1:
			return (
				<FormControl fullWidth margin="normal">
					<FormLabel component="legend">Pickup Info</FormLabel>
					<div className={Styles.pickup}>
						<div className={Styles.dateAndTime}>
							<TextField
								id="departureDate"
								label="Departure Date"
								type="date"
								InputLabelProps={{ shrink: true }}
								value={departureDate}
								onChange={(e) => setDepartureDate(e.target.value)}
								className={Styles.input}
							/>
							<TextField
								id="departureTime"
								label="Departure Time"
								type="time" InputLabelProps={{ shrink: true }}
								value={departureTime}
								onChange={(e) => setDepartureTime(e.target.value)}
								className={Styles.input}
							/>
						</div>
						<div className={Styles.locations}>
							<FormLabel component="legend" className={Styles.title}>Departure Location</FormLabel>
							<FormControlLabel control={<Checkbox checked={departureLocations.includes('Islamabad')} onChange={(e) => (e.target.checked ? setDepartureLocations([...departureLocations, 'Islamabad']) : setDepartureLocations(departureLocations.filter((loc) => loc !== 'Islamabad')))} />} label="Islamabad" />
							<FormControlLabel control={<Checkbox checked={departureLocations.includes('Lahore')} onChange={(e) => (e.target.checked ? setDepartureLocations([...departureLocations, 'Lahore']) : setDepartureLocations(departureLocations.filter((loc) => loc !== 'Lahore')))} />} label="Lahore" />
							<FormControlLabel control={<Checkbox checked={departureLocations.includes('Karachi')} onChange={(e) => (e.target.checked ? setDepartureLocations([...departureLocations, 'Karachi']) : setDepartureLocations(departureLocations.filter((loc) => loc !== 'Karachi')))} />} label="Karachi" />
						</div>
					</div>
					<FormLabel component="legend">Route Info</FormLabel>
					<TextField
						id="route"
						label="Route (comma separated)"
						value={route.join(',')}
						onChange={(e) => setRoute(e.target.value.split(','))}
					/>
				</FormControl>
			);
		case 2:
			return (
				<FormControl fullWidth margin="normal">
					<FormLabel component="legend">Price</FormLabel>
					<div className={Styles.inputContainer}>
						<TextField
							id="pricePerAdult"
							label="Price Per Adult"
							value={price.adults}
							type="number" InputLabelProps={{ shrink: true }}
							InputProps={{ inputProps: { min: 0 } }}
							onChange={(e) => setPrice({ ...price, adults: e.target.value })}
							className={Styles.input}
						/>
						<TextField
							id="pricePerChild"
							label="Price Per Child"
							value={price.children}
							type="number" InputLabelProps={{ shrink: true }}
							InputProps={{ inputProps: { min: 0 } }}
							onChange={(e) => setPrice({ ...price, children: e.target.value })}
							className={Styles.input}
						/>
					</div>
					<div className={Styles.facilities}>
						<TextField
							id="inclusions"
							label="Inclusions (comma separated)"
							minRows={1}
							value={inclusions.join(',')}
							onChange={(e) => setInclusions(e.target.value.split(','))}
							className={Styles.input}
						/>
						<TextField
							id="exclusions"
							label="Exclusions (comma separated)"
							minRows={1}
							value={exclusions.join(',')}
							onChange={(e) => setExclusions(e.target.value.split(','))}
							className={Styles.input}
						/>
						<TextField
							id="tips"
							label="Tips (comma separated)"
							minRows={1}
							value={tips.join(',')}
							onChange={(e) => setTips(e.target.value.split(','))}
							className={Styles.input}
						/>
						<TextField
							id="overview"
							label="Overview"
							minRows={1}
							value={overview}
							onChange={(e) => setOverview(e.target.value)}
							className={Styles.input}
						/>
					</div>
				</FormControl>
			);
		case 3:
			return (
				<FormControl fullWidth margin="normal">
					<FormLabel component="legend">Images</FormLabel>
					<p>Please upload at least 5 images</p>
					<input
						type="file"
						accept="image/*"
						multiple
						onChange={(e) => handleFileUpload(e)}
					/>
					{
						progresspercent > 0 && progresspercent < 100 && (
							<LinearProgress
								variant="determinate"
								value={progresspercent}
								style={{ width: '100%', marginTop: '1rem' }}
							/>
						)
					}
					{isUploading && <p>Uploading images...</p>}
					<div className={Styles.uploadedImages}>
						{images.map((imageUrl, index) => (
							<div className={Styles.uploadedImage}>
								<img src={imageUrl} alt={`Image ${index + 1}`} key={index} />
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16"
									onClick={() => handleDeleteImage(index)}
									className={Styles.deleteIcon}
								>
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
								</svg>
							</div>
						))}
					</div>
				</FormControl>
			);
		case 4:
			return (
				<FormControl fullWidth margin="normal">
					<FormLabel component="legend">Itinerary</FormLabel>
					<div className={Styles.iternary}>
						{
							dayArray.map((day, index) => (
								<div key={day} className={Styles.input}>
									<Typography variant="h6" gutterBottom>{`Day ${index + 1}`}</Typography>
									<TextField
										id={`day${index + 1}`}
										label="Activities"
										multiline minRows={1}
										value={itinerary[index + 1]}
										onChange={(e) => setItinerary({ ...itinerary, [`Day ${index + 1}`]: e.target.value })}
									/>
								</div>
							))
						}
					</div>
				</FormControl>
			);
		default:
			return null;
		}
	};

	return (
		<div>
			<Stepper activeStep={activeStep} alternativeLabel className={Styles.stepper}>
				{steps.map((label) => (
					<Step key={label} className={Styles.step}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length ? (
				<div>
					<Typography variant="h5" align="center" gutterBottom>
					Tour Created!
					</Typography>
					<Button onClick={handleReset}>Create Another Tour</Button>
				</div>
			) : (
				<div>
					{getStepContent(activeStep)}
					<div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
						<Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
						<div>
							{activeStep < steps.length - 1 && (
								<Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
							)}
							{activeStep === steps.length - 1 && (
								// eslint-disable-next-line no-undef
								<Button variant="contained" color="primary" onClick={handleSubmit}>Create Tour</Button>
							)}
						</div>
					</div>
				</div>
			)}
			<ToastContainer
				position="bottom-center"
			/>
		</div>
	);
};

export default TourForm;
