#!/bin/bash

# Base directories
ETHEREUM_DIR="/Users/bgravenorst/documentation/metamask-docs/services/reference/ethereum/json-rpc-methods"
PARTIALS_DIR="/Users/bgravenorst/documentation/metamask-docs/services/reference/_partials"
OUTPUT_DIR="/Users/bgravenorst/documentation/metamask-docs/services/tmp"

# Methods to process
METHODS=(
    "eth_accounts" "eth_blobbasefee" "eth_blocknumber" "eth_call" "eth_chainid"
    "eth_createaccesslist" "eth_estimategas" "eth_feehistory" "eth_gasprice"
    "eth_getbalance" "eth_getblockbyhash" "eth_getblockbynumber" "eth_getblockreceipts"
    "eth_getblocktransactioncountbyhash" "eth_getblocktransactioncountbynumber"
    "eth_getcode" "eth_getlogs" "eth_getproof" "eth_getstorageat"
    "eth_gettransactionbyblockhashandindex" "eth_gettransactionbyblocknumberandindex"
    "eth_gettransactionbyhash" "eth_gettransactioncount" "eth_gettransactionreceipt"
    "eth_getunclebyblockhashandindex" "eth_getunclebyblocknumberandindex"
    "eth_getunclecountbyblockhash" "eth_getunclecountbyblocknumber" "eth_getwork"
    "eth_hashrate" "eth_maxpriorityfeepergas" "eth_mining" "eth_protocolversion"
    "eth_sendrawtransaction" "eth_simulatev1" "eth_submitwork" "eth_syncing"
    "net_listening" "net_peercount" "net_version" "web3_clientversion"
)

# Function to extract frontmatter from original file
extract_frontmatter() {
    local method=$1
    local original_file="${ETHEREUM_DIR}/${method}.mdx"
    
    if [[ ! -f "$original_file" ]]; then
        echo "File not found: $original_file"
        return 1
    fi
    
    # Extract frontmatter (everything between the first --- and second ---)
    sed -n '1,/^---$/p' "$original_file"
}

# Function to read partial content (skip frontmatter if exists)
read_partial() {
    local partial_file=$1
    
    if [[ ! -f "$partial_file" ]]; then
        echo "<!-- Partial not found: $partial_file -->"
        return
    fi
    
    # If file starts with ---, skip frontmatter, otherwise read entire file
    if head -n1 "$partial_file" | grep -q "^---$"; then
        # Skip frontmatter
        sed '1,/^---$/d' "$partial_file"
    else
        # Read entire file
        cat "$partial_file"
    fi
}

# Generate consolidated file for a method
generate_method_file() {
    local method=$1
    local output_file="${OUTPUT_DIR}/${method}.mdx"
    
    echo "Generating $output_file..."
    
    # Start the file with frontmatter
    extract_frontmatter "$method" > "$output_file"
    
    # Add required imports
    cat >> "$output_file" << 'EOF'

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

EOF

    # Read and add the description partial
    local desc_file="${PARTIALS_DIR}/_${method}-description.mdx"
    echo "# \`${method}\`" >> "$output_file"
    echo "" >> "$output_file"
    read_partial "$desc_file" >> "$output_file"
    echo "" >> "$output_file"
    
    # Add Parameters section
    local params_file="${PARTIALS_DIR}/_${method}-parameters.mdx"
    echo "## Parameters" >> "$output_file"
    echo "" >> "$output_file"
    read_partial "$params_file" >> "$output_file"
    echo "" >> "$output_file"
    
    # Add Returns section
    local returns_file="${PARTIALS_DIR}/_${method}-returns.mdx"
    echo "## Returns" >> "$output_file"
    echo "" >> "$output_file"
    read_partial "$returns_file" >> "$output_file"
    echo "" >> "$output_file"
    
    # Add Example section
    local example_file="${PARTIALS_DIR}/_${method}-example.mdx"
    echo "## Example" >> "$output_file"
    echo "" >> "$output_file"
    read_partial "$example_file" >> "$output_file"
    echo "" >> "$output_file"
    
    # Add Request section
    echo "### Request" >> "$output_file"
    echo "" >> "$output_file"
    local request_file="${PARTIALS_DIR}/_${method}-request.mdx"
    read_partial "$request_file" >> "$output_file"
    echo "" >> "$output_file"
    
    # Add Response section
    echo "### Response" >> "$output_file"
    echo "" >> "$output_file"
    local response_file="${PARTIALS_DIR}/_${method}-response.mdx"
    read_partial "$response_file" >> "$output_file"
}

# Process all methods
for method in "${METHODS[@]}"; do
    generate_method_file "$method"
done

echo "All consolidated files generated in $OUTPUT_DIR"
