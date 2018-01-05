package io.hycon;

import java.io.FileInputStream;
import java.util.Date;

import io.hycon.GenesisProto.Block;

public class GenesisDecoder {
	private static String[] accountNames = {"","ICO","Airdrop","Team","Dev Fund", "Bounty","Corporate Social Responsibility"}; 
	public static void main(String[] args) {
		Block genesis = GenesisDecoder.readGenesis();
		System.out.print(GenesisDecoder.buildOutputString(genesis));
	}

    private static Block readGenesis() {
        try {
        		FileInputStream file = new FileInputStream("../../genesis.dat");
            Block genesis = Block.parseFrom(file);
            return genesis;
        } catch (Exception e) {
            System.err.println(e);
            return null;
        }
    }
    
    private static String buildOutputString(Block blk) {
    		String out = "";
    		StringBuilder sb = new StringBuilder();
    		sb.append("HYCON Genesis Block Information: \n");
    		sb.append("-------------------- \n");
    		sb.append("Block Header \n");
    		sb.append("-------------------- \n");
    		sb.append("Difficulty: "+blk.getHeader().getDifficulty()+"\n");
    		sb.append("Merkle Root: "+GenesisDecoder.bytesToHex(blk.getHeader().getMerkleRoot().toByteArray())+"\n");
    		sb.append("State Root: "+GenesisDecoder.bytesToHex(blk.getHeader().getStateRoot().toByteArray())+"\n");
    		sb.append("Timestamp: " + GenesisDecoder.printDate(blk.getHeader().getTimeStamp())+ "\n");
    		sb.append("-------------------- \n");
    		sb.append("Genesis Transactions \n");
    		sb.append("-------------------- \n");
    		for (int i = 1; i<blk.getTxsCount();i++) {
    			sb.append(GenesisDecoder.accountNames[i]+" Account \n");
    			sb.append("Receipt Account: "+GenesisDecoder.bytesToHex(blk.getTxs(i).getTo().toByteArray()) + "\n");
    			sb.append("Transaction Amount: "+ GenesisDecoder.commaFormat(blk.getTxs(i).getAmount())+"\n");
    			sb.append("-------------------- \n");
    		}
    		out = sb.toString();
    		return out;
    }
    
    private static String bytesToHex(byte[] in) {
        final StringBuilder builder = new StringBuilder();
        for(byte b : in) {
            builder.append(String.format("%02x", b));
        }
        return builder.toString();
    }
    
    private static String printDate(long timestamp) {
    	Date d = new Date(timestamp);
    	return d.toString();
    }
    
    private static String commaFormat(long val) {
    		String out = "";
    		String in = Long.toString(val);
    		int x = 1;
    		for (int i = in.length()-1;i>=0; i--) {
    			out = in.charAt(i)+out;
    			
    			if(i!=0 & x%3==0) {
    				out = ","+out;
    			}
    			x++;
    		}
    		return out;
    }
}
