package com.wimthackathon.codegptuiapi.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wimthackathon.codegptuiapi.io.GetCompanyInfoResponse;


@RestController
@RequestMapping("/codeGPT")
public class CodeGPTController {

	@RequestMapping(value="/getCompanyInfo", method = RequestMethod.POST, produces = {"application/json"}, 
			consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	public @ResponseBody ResponseEntity<GetCompanyInfoResponse> getCompanyInfo(@RequestParam("file") MultipartFile image) {
		return null;
	}
}
