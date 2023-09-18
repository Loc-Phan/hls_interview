import { useState, useCallback, useEffect } from "react";
import Cookie from "universal-cookie";
import isEqual from "lodash/fp/isEqual";
import CryptoJS from "crypto-js";

const SECRET_KEY = "hls_interview";
const isProduction = process.env.REACT_APP_ENV === "production";

// Encrypt
const encrypt = (value) => {
	if (isProduction) {
		const ciphertext = CryptoJS.AES.encrypt(
			JSON.stringify(value),
			SECRET_KEY
		).toString();
		return ciphertext;
	}
	return JSON.stringify(value);
};

// Decrypt
const decrypt = (value) => {
	if (isProduction) {
		const bytes = CryptoJS.AES.decrypt(value, SECRET_KEY);
		const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
		return decryptedData;
	}
	return JSON.parse(value);
};

const useCookie = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const cookie = new Cookie();
			const item = cookie.get(key);
			if (!item) return initialValue;
			return decrypt(item);
		} catch (ex) {
			return initialValue;
		}
	});

	const setValue = useCallback(
		(value) => {
			try {
				const cookie = new Cookie();
				const valueToStore =
					typeof value === "function" ? value(storedValue) : value;
				setStoredValue(valueToStore);
				cookie.set(key, encrypt(valueToStore));
			} catch (error) {
				console.error(error);
			}
		},
		[key, storedValue]
	);

	useEffect(() => {
		// Handle storage event when a storage area has been modified in the context of another document.
		const handleStorage = ({ key: currentKey, newValue, oldValue }) => {
			if (key === currentKey) {
				const newObject = decrypt(newValue);
				const oldObject = decrypt(oldValue);
				if (isEqual(newObject, oldObject)) return;
				setStoredValue(newObject);
			}
		};
		window.addEventListener("storage", handleStorage);
		return () => {
			window.removeEventListener("storage", handleStorage);
		};
	}, [key]);

	return [storedValue, setValue];
};

export default useCookie;
