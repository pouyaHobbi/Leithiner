export const emailValidation = (email, cb) => {
	if (!email.length) {
		return cb({
			isValid: false,
			message: 'Please provide a valid email address.',
		})
	} else if (!email.includes('@')) {
		return cb({
			isValid: false,
			message: 'Each email address should have a @ symbole.',
		})
	} else if (!email.includes('.')) {
		return cb({
			isValid: false,
			message: 'Each email address should have a .(suffix)',
		})
	}
	return cb({
		isValid: true,
		message: '',
	})
}

export const passwordValidation = (password, cb) => {
	if (!password.length) {
		return cb({
			isValid: false,
			message: 'Password is required.',
		})
	}
	return cb({
		isValid: true,
		message: '',
	})
}
