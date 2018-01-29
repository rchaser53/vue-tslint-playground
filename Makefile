.PHONY: zip clean deploy

default: zip

clean:
	rm -rf build
	mkdir build

zip: clean
	cp -r ./fake.pdf ./build/
	chmod -R +x build
	zip -r build/fake.zip fake.pdf 
	rm -rf ./build/fake.pdf

deploy: zip
	node tasks/s3.js