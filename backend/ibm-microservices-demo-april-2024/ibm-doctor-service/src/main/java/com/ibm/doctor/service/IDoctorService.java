package com.ibm.doctor.service;

import java.util.List;

import com.ibm.doctor.model.Doctor;

public interface IDoctorService {

	public abstract String doctorAdd(Doctor doctor);

	public abstract List<Doctor> doctors();

	public abstract Doctor doctorById(String doctorId);

	public abstract List<Doctor> doctorsBySpecialization(String specialization);
	
	public abstract List<Doctor> doctorsByName(String name) ;

	public abstract String doctorUpdate(String doctorId, Doctor doctor);

	public abstract String doctorDelete(String doctorId);

}
