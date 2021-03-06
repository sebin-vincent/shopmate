package com.litmus7.shopmate.order.feignclient;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import feign.Contract;
import feign.auth.BasicAuthRequestInterceptor;

@Configuration
public class ServiceInventoryClientConfig {
	
	@Bean
	public Contract feignContract() {
		return new feign.Contract.Default();
	}
	
	@Bean
    public BasicAuthRequestInterceptor basicAuthRequestInterceptor() {
        return new BasicAuthRequestInterceptor("user", "password");
    }
}
