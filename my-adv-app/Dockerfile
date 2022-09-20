#use node base image
FROM baseIamge
#set maintainer

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -f http://127.0.0.1.8000 || exit
#tell docker wht port to expose

EXPOSE 8000
